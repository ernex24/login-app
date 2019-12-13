import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Moment from 'react-moment';

const Landing = ({ match }) => {
	const [ adData, setAdData ] = useState({});

	let { id } = useParams();

	useEffect(() => {
		axios.get(`/api/ad/find/${match.params.slug}`).then((response) => {
			setAdData(response.data);
			console.log(response.data);
		});
	}, []);

	return (
		<Fragment>
			<div className="container">
				<div className="card_container_ad">
					<div className="card_description_ad">
						<div>{adData.user ? adData.user.name : adData.user}</div>
						<div className="card_description_title">{adData.title}</div>
						<div className="card_description_price">
							{adData.price} {adData.currency}
						</div>
						<div>{adData.brand}</div>
						<div className="card_description_description">{adData.description}</div>
						<div className="card_description_email">
							<label>Contact: </label>
							{adData.user ? adData.user.email : adData.user}
						</div>
						<div className="card_date_published">
							<label>Date published: </label>
							<Moment format="DD/MM/YYYY">
								<div>{adData.date}</div>
							</Moment>
						</div>
					</div>
					<img className="card_image_ad" src={adData.image1} />
					{/* <ul className="card_categorys_ad">
						<li ><Link to={`/category/${adData.category}`}>{adData.category}    ></Link></li>
						<li><div>{adData.subcategory}</div></li>
					</ul> */}
				</div>
			</div>
		</Fragment>
	);
};

export default Landing;
