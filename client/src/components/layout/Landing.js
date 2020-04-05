import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Landing = () => {
	const [ adData, setAdData ] = useState({});

	useEffect(() => {
		axios.get('/api/ad/all/latest').then((response) => {
			setAdData(response.data);
			console.log(response.data);
		});
	}, []);

	let history = useHistory();

	return (
		<Fragment>
			<div className="container">
				{Object.values(adData).map((key, index) => {
					return (
						<div className="card_container" key={key._id} onClick={ () => history.push(`/ad/${key._id}`)}>
							<img className="card_image" src={key.image} />
							<div className="card_description">
								<div className="card_description_title">{key.title}</div>
								<div className="card_description_price">
									{key.price} {key.currency}
								</div>
								<div className="card_description_description">{key.description}</div>
								<Link to={`ad/${key._id}`}></Link>
							</div>
						</div>
					);
				})}
			</div>
		</Fragment>
	);
};

export default Landing;
