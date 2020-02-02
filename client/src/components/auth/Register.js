import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Register = (props) => {
	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const [ error, setError ] = useState();
	const [ login, setLogin ] = useState(false);
	const [ token, setToken ] = useState();

	const { name, email, password, password2 } = formData;
	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			console.log('Password not match');
		} else {
			const newUser = {
				name,
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
				const res = await axios.post('/api/register', body, config);
				console.log(res);
				if (res.status === 200) {
					localStorage.setItem('token', JSON.stringify({ token: res.data }));
					setToken(res.data.token);
					setLogin(true);
					props.hide();
				}
			} catch (err) {
				console.error('Error')
				// console.error(err.response.data);
				// const error = err.response.data;
				// setError(error.errors[0].msg);
				// console.error(error.errors[0].msg);
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
					type="text"
					value={name}
					onChange={(e) => onChange(e)}
					placeholder="Name"
					name="name"
					required
				/>
				<label className="input_labels">Email:</label>
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
					placeholder="Password"
					name="password"
					value={password}
					onChange={(e) => onChange(e)}
					minLength="6"
					required
				/>
				<label className="input_labels">Confirm Password:</label>
				<input
					className="_input_login"
					type="password"
					value={password2}
					onChange={(e) => onChange(e)}
					placeholder="Confirm password"
					name="password2"
					minLength="6"
					required
				/>
				<div className="alert_error">{error}</div>
				<input className="_input_button-primary" type="submit" value="Register" />
			</form>
		</Fragment>
	);
};

export default Register;
