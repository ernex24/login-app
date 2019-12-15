import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import jwtdecode from 'jwt-decode';
import { withRouter } from 'react-router-dom';
import { Tabs } from '@yazanaabed/react-tabs';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const Profile = (props) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
					setToken(rawToken);
					const config = {
						headers: { 'X-Auth-Token': rawToken }
					};
					axios.get('/api/profile/me', config).then((res) => {
						if (res.status === 200) {
							setProfile(res.data[0]);
							console.log(res.data[0]);
						}
					});
				} else if (!getToken) {
					setProfile('');
					setToken(false);
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

	const mapStyles = {
		width: '80%',
		height: '200px',
	  };

	return (
		<Fragment>
			<div>
				<div className="container_profile">
					<div className="card_profile">
						<Tabs activeTab={{ id: 'tab1' }}>
							<Tabs.Tab id="tab1" title="My Profile">
								<div className="card_description_title">
									Hi, {profile ? profile.user.name : profile} This is your personal profile
								</div>
								<form className="login_container">
									<div className="profile_image">
										<label className="input_labels">Profile picture:</label>
										<img className="round-profile-image" src={profile ? profile.image : profile} />
									</div>
									<label className="input_labels">Name:</label>
									<input
										className="_input_login"
										type="test"
										value={profile ? profile.user.name : profile}
										onChange={(e) => onChange(e)}
										placeholder="name"
										name="name"
										required
									/>
									<label className="input_labels">Email:</label>
									<input
										className="_input_login"
										type="email"
										value={profile ? profile.user.email : profile}
										onChange={(e) => onChange(e)}
										placeholder="email"
										name="email"
										required
									/>
									<label className="input_labels">Bio:</label>
									<input
										className="_input_login"
										type="text"
										value={profile ? profile.bio : profile}
										onChange={(e) => onChange(e)}
										placeholder="text"
										name="text"
										required
									/>
									<label className="input_labels">Country:</label>
									<input
										className="_input_login"
										type="text"
										value={profile ? profile.country : profile}
										onChange={(e) => onChange(e)}
										placeholder="country"
										name="country"
										required
									/>
									<label className="input_labels">City:</label>
									<input
										className="_input_login"
										type="text"
										value={profile ? profile.city : profile}
										onChange={(e) => onChange(e)}
										placeholder="city"
										name="city"
										required
									/>
									<label className="input_labels">Postal Code:</label>
									<input
										className="_input_login"
										type="text"
										value={profile ? profile.postalcode : profile}
										onChange={(e) => onChange(e)}
										placeholder="Prostal Code"
										name="postalcode"
										required
									/>
									<label className="input_labels">Phone:</label>
									<input
										className="_input_login"
										type="text"
										value={profile ? profile.phone : profile}
										onChange={(e) => onChange(e)}
										placeholder="Phone"
										name="phone"
										required
									/>
									<input className="_input_button-primary" type="submit" value="Update My profile" />
								</form>
								<div className="conatainer_map">
								<Map 
								style={mapStyles}
								google={props.google}
								zoom={14}
								initialCenter={{
									lat: 47.3769,
									lng: 8.5417
								  }}
								>
								</Map>
								</div>

							</Tabs.Tab>
							<Tabs.Tab id="tab2" title="My Products">
								<div>
									<div className="card_description_title">My products</div>
								</div>
							</Tabs.Tab>
						</Tabs>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default GoogleApiWrapper({
	apiKey: 'AIzaSyANQlvYu6lVCvxwtr_vr_ksvsN4KojHBhk'
})(Profile);
