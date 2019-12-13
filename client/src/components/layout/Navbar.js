import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';
import useModal from './useModal';


const Navbar = (props) => {

	const { isShowing, toggle } = useModal();

	return (
		<Fragment>
			<Modal isShowing={isShowing} hide={toggle} />
			<div className="header">
				<div className="header_logo">
					<Link to="/">Shoping_Hub</Link>
				</div>
				<input placeholder="Search" className="_input" type="text" />
				<ul className="header_menu">
					<li onClick={toggle}>Login / Register</li>
					<li><Link to="/">Sell a new product</Link></li>
				</ul>
			</div>
		</Fragment>
	);
};

export default Navbar;
