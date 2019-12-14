import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import jwtdecode from 'jwt-decode';
import {
  withRouter
} from 'react-router-dom'

const Profile = (props) => {
	const [ profile, setProfile ] = useState();
	const [ token, setToken ] = useState();

	useEffect(() => {
		getUser();
	}, []);

	const getUser = (props) => {
		setInterval(() => {
		try {
			const getToken = JSON.parse(localStorage.getItem('token'));
			if (getToken) {
				const rawToken = getToken.token.token;
				setToken(rawToken)
				const config = {
					headers: { 'X-Auth-Token': rawToken }
				};
				axios.get('/api/profile/me', config).then((res) => {
					if (res.status === 200) {
						setProfile(res.data[0]);
						console.log(res.data[0]);
					} 
				});
			} else if (!getToken){
				setProfile('')
				setToken(false)
			}
		} catch (err) {
			console.log(err);
			console.log('error');
		}
		}, 300);
	};

	if (token === false) {
		return <Redirect to="/" />;
	  }

	return (
		<Fragment>
			<h1>Profile</h1>
			<div clasName="container_profile">
			<div>{profile ? profile.user.name : profile}</div>
			<div>{profile ? profile.user.email : profile}</div>
			<div>{profile ? profile.bio : profile}</div>
			<div>{profile ? profile.country : profile}</div>
			<div>{profile ? profile.city : profile}</div>
			<div>{profile ? profile.postalcode : profile}</div>
			<div>{profile ? profile.date : profile}</div>
			<div><img src={profile ? profile.image : profile} /></div>
			<div>{profile ? profile.phone : profile}</div>
			<div>{profile ? profile.postalcode : profile}</div>
			</div>
		</Fragment>
	);
};

export default Profile;
