import React, { Fragment, useState, useEffect } from 'react';
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

	return (
		<Fragment>
			<div>
				<h1>Landing</h1>
				{Object.values(adData).map((key, index) => {
					return (
						<div className="ads_container">
							<Link to={`category/${key.category}`}>{key.category}</Link>
							<div>{key.subcategory}</div>
							<img src={key.image1} />
							<div>{key.user.name}</div>
							<div>{key.title}</div>
							<div>
								{key.price} {key.currency}
							</div>
							<div>{key.brand}</div>
							<div>{key.description}</div>
							<div>{key.date}</div>
                            <Link to={`ad/${key._id}`}>Ver</Link>
						</div>
					);
				})}
			</div>
		</Fragment>
	);
};

export default Landing;
