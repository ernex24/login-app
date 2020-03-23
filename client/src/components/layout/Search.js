import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useParams,  useLocation } from "react-router";
import { Link } from 'react-router-dom';
import queryString from 'query-string'

import axios from 'axios';

const Search = ({match}) => {
	const [ adData, setAdData ] = useState({});

	let location = useLocation();

	const values = queryString.parse(location.search)
	console.log(values.search)

	let { id } = useParams();

	useEffect(() => {
		axios.get(`/api/ad/search/${values.search}`).then((response) => {
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
							<img className="card_image" src={key.image1} />
							<div className="card_description">
								<div className="card_description_title">{key.title}</div>
								<div className="card_description_price">
									{key.price} {key.currency}
								</div>
								<div className="card_description_description">{key.description}</div>
							</div>
						</div>
					);
				})}
			</div>
		</Fragment>
	);
};

export default Search;
