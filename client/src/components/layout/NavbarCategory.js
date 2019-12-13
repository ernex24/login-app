import React from 'react';
import { Link } from 'react-router-dom';

const NavbarCategory = (props) => {
	return (
		<div className="header_category">
		<div className="cta_category">What are you going to buy or sell today?</div>
		<ul className="header_menu_category">
			<li>
				<Link to="/register">All</Link>
			</li>
			<li>
				<Link to="/login">Cars</Link>
			</li>
			<li>
				<Link to="/">Bikes</Link>
			</li>
			<li>
				<Link to="/">Fashion</Link>
			</li>
			<li>
				<Link to="/">Tv / Audio</Link>
			</li>
			<li>
				<Link to="/">Cellphones</Link>
			</li>
			<li>
				<Link to="/">Electronic</Link>
			</li>
			<li>
				<Link to="/">Collecting</Link>
			</li>
			<li>
				<Link to="/">Construction</Link>
			</li>
			<li>
				<Link to="/">Services</Link>
			</li>
			<li>
				<Link to="/">Jobs</Link>
			</li>
			<li>
				<Link to="/">Others</Link>
			</li>
		</ul>
	</div>
	);
};

export default NavbarCategory;
