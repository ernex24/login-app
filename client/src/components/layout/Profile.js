import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import jwtdecode from 'jwt-decode';
import { withRouter } from 'react-router-dom';
import { Tabs } from '@yazanaabed/react-tabs';
import Modal from './Modal';
import Myads from './MyAds';

const Profile = (props) => {
	const [token, setToken] = useState();
	const [profile, setProfile] = useState();
	const [profileImage, setProfileImage] = useState();
	const [profileImageName, setProfileImageName] = useState();
	const [profileExist, setProfileExist] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		image: '',
		email: '',
		bio: '',
		country: '',
		city: '',
		postalcode: '',
		phone: ''
	});
	const { email, password, image, bio, country, city, postalcode, phone } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onChangeImage = (e) => {
		setProfileImage(e.target.files[0]);
		setProfileImageName(e.target.files[0].name);
	}

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
							if (res.data.length != 0) {
								setProfileExist(true);
							}
							console.log(res.data);
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
		}, 500);
	};

	if (token === false) {
		return <Redirect to="/" />;
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		var formDataT = new FormData();
		formDataT.append("image", profileImage, profileImageName)
		formDataT.append("email", email)
		formDataT.append("bio", bio)
		formDataT.append("country", country)
		formDataT.append("city", city)
		formDataT.append("postalcode", postalcode)
		formDataT.append("phone", phone)
		try {
			const config = {
				headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token }
			};
			const body = JSON.stringify(formDataT);
			const res = await axios.post('/api/profile', formDataT, config);
			console.log(res);
			if (res.status === 200) {
				console.log('Profile Created');
			}
		} catch (err) {
			if (err) {
				console.log(err);
			}
		}
	};

	return (
		<Fragment>
			<div>
				<div className="container_profile">
					<div className="card_profile">
						<Tabs activeTab={{ id: 'tab1' }}>
							<Tabs.Tab id="tab1" title="My Profile">
								{profileExist ?
									<div className="card_description_title">
										Hi, {profile ? profile.user.name : profile} This is your personal profile
									</div>
									:
									<div className="card_description_title">
										Hi, {profile ? profile.user.name : profile} First create your profile
									</div>
								}
								<form className="login_container" onSubmit={(e) => onSubmit(e)}>
									<div className="profile_image">
										<label className="input_labels">Profile picture:</label>
										<img className="round-profile-image" src={profile ? profile.image : profile} />
										<input
											className="_input_button-primary"
											value={image}
											onChange={(e) => onChangeImage(e)}
											type="file"
											name="image"
										/>
									</div>

									<div className="profile_image">
										<label className="input_labels">Email:</label>
										{profile ? profile.user.email : profile}
									</div>

									<div className="profile_image">
										<label className="input_labels">Name:</label>
										{profile ? profile.user.name : profile}
									</div>

									<label className="input_labels">Bio:</label>
									<input
										className="_input_login"
										type="text"
										value={bio}
										onChange={(e) => onChange(e)}
										placeholder={profile ? profile.bio : profile}
										name="bio"
									/>
									<label className="input_labels">Country:</label>
									<input
										className="_input_login"
										type="text"
										value={country}
										onChange={(e) => onChange(e)}
										placeholder={profile ? profile.country : profile}
										name="country"
									/>
									<label className="input_labels">City:</label>
									<input
										className="_input_login"
										type="text"
										value={city}
										onChange={(e) => onChange(e)}
										placeholder={profile ? profile.city : profile}
										name="city"
									/>
									<label className="input_labels">Postal Code:</label>
									<input
										className="_input_login"
										type="text"
										value={postalcode}
										onChange={(e) => onChange(e)}
										placeholder={profile ? profile.postalcode : profile}
										name="postalcode"
									/>
									<label className="input_labels">Phone:</label>
									<input
										className="_input_login"
										type="text"
										value={phone}
										onChange={(e) => onChange(e)}
										placeholder={profile ? profile.phone : profile}
										name="phone"
									/>
									<input className="_input_button-primary" type="submit" value="Update My profile" />
								</form>
							</Tabs.Tab>
							<Tabs.Tab id="tab2" title="My Products">
								<Myads token={token} userId={profile ? profile.user._id : profile} />
							</Tabs.Tab>
						</Tabs>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Profile;
