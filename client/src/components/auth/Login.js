import React, { Fragment, useState, use } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

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
