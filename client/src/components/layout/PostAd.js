import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import Moment from 'react-moment';

const PostAd = ({ match }) => {
	const [ token, setToken ] = useState();
	const [ profile, setProfile ] = useState();
	const [ postAd, setPostAd ] = useState();
	const [ postId, setPostId ] = useState();
	const [ formData, setFormData ] = useState({
		category: '',
		subcategory: '',
		brand: '',
		model: '',
		year: '',
		title: '',
		price: '',
		currency: '',
		description: '',
		image1: 'https://picsum.photos/300/300',
		image2: 'https://picsum.photos/300/300',
		image3: 'https://picsum.photos/300/300',
		image4: 'https://picsum.photos/300/300'
	});

	const {
		category,
		subcategory,
		brand,
		model,
		year,
		title,
		price,
		currency,
		description,
		image1,
		image2,
		image3,
		image4
	} = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	useEffect(() => {
		getUser();
	}, []);

	const getUser = (props) => {
		/* Get the token from local storage to know if someone is logged in*/
		try {
			const getToken = JSON.parse(localStorage.getItem('token'));
			if (getToken) {
				const rawToken = getToken.token.token;
				/* Set the token in the state */
				setToken(rawToken);
			} else if (!getToken) {
				setProfile('');
				setToken(false);
			}
		} catch (err) {
			console.log(err);
			console.log('error');
		}
	};

	/* Redirect if no token is found "no one logged in" */
	if (token === false) {
		return <Redirect to="/" />;
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		const newAd = {
			category,
			subcategory,
			brand,
			model,
			year,
			title,
			price,
			currency,
			description,
			image1,
			image2,
			image3,
			image4
		};
		try {
			const config = {
				headers: { 'Content-Type': 'application/json', 'X-Auth-Token': token }
			};
			const body = JSON.stringify(newAd);
			const res = await axios.post('/api/ad', body, config);
			console.log(res);
			if (res.status === 200) {
				setPostId(res);
				setPostAd(true);
				console.log('post saved');
			}
		} catch (err) {
			if (err) {
				console.log(err);
			}
		}
	};

	if (postAd === true) {
		console.log(postId.data._id)
		return <Redirect to={`/ad/${postId.data._id}`}/>;
	}

	return (
		<Fragment>
			<div>
				<div className="container_profile">
					<div className="card_profile">
						<div className="card_description_title"> What are you are going to sell today?</div>
						<form className="login_container" onSubmit={(e) => onSubmit(e)}>
							<label className="input_labels">Category:</label>
							
                            <select className="_select_login" name="category" value={category} onChange={(e) => onChange(e)}>
								<option value="cars">Select Category</option>
								<option value="bikes">Bikes</option>
								<option value="fashion">Fashion</option>
								<option value="cellphones" >Cellphones</option>
								<option value="electronic">Electronic</option>
								<option value="collecting">Collecting</option>
								<option value="services">Services</option>
								<option value="jobs">Jobs</option>
								<option value="others">Others</option>
							</select>

                            <label className="input_labels">Sub category:</label>
							<select className="_select_login" name="subcategory"  value={subcategory} onChange={(e) => onChange(e)}>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</select>

							<label className="input_labels">Brand:</label>
							<input
								className="_input_login"
								value={brand}
								type="text"
								placeholder="Brand of the product"
								name="brand"
								onChange={(e) => onChange(e)}
								required
							/>
							<label className="input_labels">Model:</label>
							<input
								className="_input_login"
								value={model}
								type="text"
								placeholder="Model of the product"
								name="model"
								onChange={(e) => onChange(e)}
								required
							/>
							<label className="input_labels">Year:</label>
							<input
								className="_input_login"
								value={year}
								type="number"
								placeholder="Year of the product"
								name="year"
								onChange={(e) => onChange(e)}
								required
							/>

							<label className="input_labels">Title:</label>
							<input
								className="_input_login"
								value={title}
								type="text"
								placeholder="What you want to sell?"
								name="title"
								onChange={(e) => onChange(e)}
								required
							/>

							<label className="input_labels">Price:</label>
							<input
								className="_input_login"
								value={price}
								type="number"
								placeholder="How much is the cost"
								name="price"
								onChange={(e) => onChange(e)}
								required
							/>

							<label className="input_labels">Currency:</label>
							<input
								className="_input_login"
								value={currency}
								type="text"
								placeholder="Currency"
								name="currency"
								onChange={(e) => onChange(e)}
								required
							/>

							<label className="input_labels">Description:</label>
							<input
								className="_input_login"
								value={description}
								type="text"
								placeholder="Description: of the product"
								name="description"
								onChange={(e) => onChange(e)}
								required
							/>

							<input className="_input_button-primary" type="submit" value="Post new add" />
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default PostAd;
