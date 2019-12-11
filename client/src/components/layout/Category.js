import React, { Fragment, useState, useEffect } from 'react';
import { useParams} from "react-router";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Landing = ({match}) => {
	const [ adData, setAdData ] = useState({});

	let { id } = useParams();

	useEffect(() => {
		axios.get(`/api/ad/${match.params.slug}`).then((response) => {
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
							<div>{key.category}</div>
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
						</div>
					);
				})}
			</div>
		</Fragment>
	);
};

export default Landing;
