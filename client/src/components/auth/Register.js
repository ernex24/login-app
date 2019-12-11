import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
	const [formData, setFormData ] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

const { name, email, password, password2 } = formData;
const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

const onSubmit = async e => {
    e.preventDefault();
    if(password !== password2){
        setAlert('Passwords do not match', 'danger')
    } else {
        const newUser = {
            name,
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
            const res = await axios.post('/api/register', body, config)
            console.log(res.data)
            } catch(err) {
            console.error(err.response.data)
            }
        }
    };

	return (
        <Fragment>
		<div>
			<h1>Register</h1>
			<form onSubmit={ e => onSubmit(e)}>
				<div>
                    <input 
                    type="text" 
                    value={name}
                    onChange={e => onChange(e)}
                    placeholder="Name" 
                    name="name" 
                    required 
                    />
				</div>
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
                <div>
                    <input 
                    type="password" 
                    value={password2}
                    onChange={e => onChange(e)}
                    placeholder="Confirm password" 
                    name="password2" 
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

Register .propTypes = {
setAlert: PropTypes.func.isRequired
}

export default connect(null,{ setAlert })(Register);
