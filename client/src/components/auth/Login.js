import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Login = () => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const [error, setError] = useState()

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
				headers: {
					'Content-Type': 'application/json'
				}
			};
			const body = JSON.stringify(newUser);
			const res = await axios.post('/api/login', body, config);
		} catch (err) {
			const error =  err.response.data
			setError(error.errors[0].msg)
			console.error(error.errors[0].msg);
			
		}
	};

	return (
		<Fragment>
			<form className="login_container" onSubmit={(e) => onSubmit(e)}>
				<div className="login_logo">Shoping_Hub</div>
				<div className="auth_title">Log in</div>
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
				{error}	
				<input className="_input_button-primary" type="submit" value="Log In" />
			</form>
		</Fragment>
	);
};

export default Login;
