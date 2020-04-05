import React, { Fragment, useState, use } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from "react-google-login";


const Login = (props) => {



	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});
	const [ error, setError ] = useState();
	const [ userDetails, setUserDetails ] = useState();
	const [ token, setToken ] = useState();
	const [ login, setLogin ] = useState(false);
	const { email, password } = formData;
	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();

		const newUser = {
			email,
			password
		};
		try {
			const config = {
				headers: { 'Content-Type': 'application/json' }
			};
			const body = JSON.stringify(newUser);
			const res = await axios.post('/api/login', body, config);
			console.log(res);
			if (res.status === 200) {
				localStorage.setItem('token', JSON.stringify({ token: res.data }));
				setToken(res.data.token);
				setLogin(true);
				props.hide();
				
			}
		} catch (err) {
			if (err) {
				setError('Error ocurred');
			}
		}
	};

	if (login) {
		return <Redirect to="/profile" />;
	  }

	  const responseGoogle = (response) => {
		setUserDetails(response.profileObj);
		setLogin(true);
	  }

	  const logout = () => {
		setLogin(false);
	  };

	return (
		<Fragment>
			
			<form className="login_container" onSubmit={(e) => onSubmit(e)}>

			  {!login && (
          			<GoogleLogin
            			clientId="21121501733-m3uhml2th59ec4gvpa5fj2vels97g5lt.apps.googleusercontent.com" 
            			render={renderProps => (
						<button
							className="button"
							onClick={renderProps.onClick}
							disabled={renderProps.disabled}
						>
							Log in with Google
						</button>
            		)}
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
          			/>
        			)}
        			{login && (
							<GoogleLogout
								render={renderProps => (
								<button
									className="logout-button"
									onClick={renderProps.onClick}
								>
                    			Log Out
                  				</button>
               		 		)}
                			onLogoutSuccess={logout}
              				/>
					)}

				<label className="input_labels">Name:</label>
				<input
					className="_input_login"
					type="email"
					value={email}
					onChange={(e) => onChange(e)}
					placeholder="Email"
					name="email"
					required
				/>
				<label className="input_labels">Password:</label>
				<input
					className="_input_login"
					type="password"
					placeholder="password"
					name="password"
					value={password}
					onChange={(e) => onChange(e)}
					minLength="6"
					required
				/>
				<div className="alert_error">{error}</div>
				<input className="_input_button-primary" type="submit" value="Log In" />
			</form>
		</Fragment>
	);
};

export default Login;
