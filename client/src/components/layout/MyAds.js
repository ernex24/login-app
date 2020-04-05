import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const Myads = (props) => {

    const [ adData, setAdData ] = useState({});
    
    useEffect(() => {
        getPosts();
	}, []);

	const getPosts = () => {
		const config = {
			headers: { 'X-Auth-Token': props.token }
		};

		axios.get(`/api/ad/find/user/${props.userId}`, config).then((res) => {
			if (res.status === 200) {
				setAdData(res.data);
				console.log(res.data);
			}
		});
	};

    let history = useHistory();

	return (
		<div>
			<div className="card_description_title">My products</div>
			<div className="container_myproducts">
				{Object.values(adData).map((key, index) => {
					return (
						<div
							className="card_container"
							key={key._id}
							onClick={() => history.push(`/ad/${key._id}`)}
						>
							<img className="card_image" src={key.image} />
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
		</div>
	);
};
export default Myads;
