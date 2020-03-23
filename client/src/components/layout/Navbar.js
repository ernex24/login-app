import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Modal from './Modal';
import useModal from './useModal';
 

const Navbar = () => {

	const [ user, setUser ] = useState();
	const [ email, setEmail ] = useState();
	const [ token, setToken ] = useState();
	const [ search, setSearch ] = useState();


	const onChange = (e) => setSearch(e.target.value);

	const history = useHistory();
	function handleClick(e) {
		history.push("/search");
	  }

	useEffect(() => {
		getUser();
	}, []);

	const getUser = () => {
		setInterval(() => {
			try {
				const getToken = JSON.parse(localStorage.getItem('token'));
				if (getToken) {
					const rawToken = getToken.token.token;
					setToken(rawToken)
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
				<form className="_search_form">
				<input
					className="_input"
					value={search}
					type="text"
					placeholder="Search"
					name="search"
					onChange={(e) => onChange(e)}
				/>
				<input className="_input_button-primary" type="submit" value="Search" onClick={handleClick}/>
				</form>
				<ul className="header_menu">
					<li>
						<Link to="/postad">Sell a product</Link>
					</li>
					{user ? <li><Link to="/profile">Hi, {user}</Link></li> : <li onClick={toggle}>Login / Register</li>}
					{user ? <li onClick={() => logOut()}>Log out</li> : ''}
				</ul>
			</div>
		</Fragment>
	);
};

export default Navbar;
