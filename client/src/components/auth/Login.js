import React, { Fragment, useState } from 'react';
import axios from 'axios'

const Login = () => {
	const [formData, setFormData ] = useState({
		email: '',
		password: ''
	});

const { email, password } = formData;
const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

const onSubmit = async e => {
    e.preventDefault();

        const newUser = {
            email,
            password
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const body = JSON.stringify(newUser);
            console.log(body, config)
            const res = await axios.post('/api/login', body, config)
            console.log(res.data)
            } catch(err) {
            console.error(err.response.data)
            }
    };

	return (
        <Fragment>
		<div>
			<h1>Login</h1>
			<form onSubmit={ e => onSubmit(e)}>
                <div>
                    <input 
                    type="email" 
                    value={email}
                    onChange={e => onChange(e)}
                    placeholder="Email" 
                    name="email" 
                    required 
                    />
				</div>
                <div>
                    <input 
                    type="password" 
                    placeholder="password"
                    name="password" 
                    value={password}
                    onChange={e => onChange(e)}
                    minLength='6'
                    required 
                    />
				</div>
                <input 
                    type="submit" 
                    value="Register"
                    />
			</form>
		</div>
        </Fragment>
	);
};

export default Login;
