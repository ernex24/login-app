import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Modal from './Modal';
import useModal from './useModal';

 

const Navbar = () => {
	const [ user, setUser ] = useState();
	const [ email, setEmail ] = useState();

	useEffect(() => {
		getUser();
	}, []);

	const getUser = () => {
		setInterval(() => {
			try {
				const getToken = JSON.parse(localStorage.getItem('token'));
				if (getToken) {
					const rawToken = getToken.token.token;
					const config = {
						headers: { 'X-Auth-Token': rawToken }
					};
					axios.get('/api/auth', config).then((res) => {
						if (res.status === 200) {
							setUser(res.data.name);
							setEmail(res.data.email);
						}
					});
				}
			} catch (err) {
				console.log(err);
				console.log('error');
			}
		}, 300);
	};

	const { isShowing, toggle } = useModal();

	const logOut = () => {
		localStorage.removeItem('token');
		setUser(null);
		setEmail(null);
	};

	return (
		<Fragment>
			<Modal isShowing={isShowing} hide={toggle} />
			<div className="header">
				<div className="header_logo">
					<Link to="/">Shopping_Hub</Link>
				</div>
				<input placeholder="Search" className="_input" type="text" />
				<ul className="header_menu">
					<li>
						<Link to="/">Sell a product</Link>
					</li>
					{user ? <li>Hi, {user}</li> : <li onClick={toggle}>Login / Register</li>}
					{user ? <li onClick={() => logOut()}>Log out</li> : ''}
				</ul>
			</div>
		</Fragment>
	);
};

export default Navbar;
