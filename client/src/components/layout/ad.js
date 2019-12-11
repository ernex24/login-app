import React, { Fragment, useState, useEffect } from 'react';
import { useParams} from "react-router";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Landing = ({match}) => {
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
			<div>
				<h1>Landing</h1>
						<div className="ads_container">
							<Link to={`/category/${adData.category}`}>{adData.category}</Link>
							<div>{adData.subcategory}</div>
							<img src={adData.image1} />
							<div>{adData.user ? adData.user.name : adData.user}</div>
							<div>{adData.title}</div>
							<div>
								{adData.price} {adData.currency}
							</div>
							<div>{adData.brand}</div>
							<div>{adData.description}</div>
							<div>{adData.date}</div>
						</div>
			</div>
		</Fragment>
	);
};

export default Landing;
