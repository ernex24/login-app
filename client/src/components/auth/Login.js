import React, { Fragment, useState, use } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// import { useGoogleLogin } from 'react-google-login'

const Login = (props) => {

	// const responseGoogle = (response) => {
	// 	console.log(response);
	//   }

	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});
	const [ error, setError ] = useState();
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

	return (
		<Fragment>
			<form className="login_container" onSubmit={(e) => onSubmit(e)}>

			 {/* <GoogleLogin
					clientId="114087787058-9hmhids9jfrk2t17hkd71g36d4l7o6k4.apps.googleusercontent.com"
					buttonText="Login with Google"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/> */}

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
