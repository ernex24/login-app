import React from 'react';
import { Link } from 'react-router-dom';

const NavbarCategory = (props) => {
	return (
		<div className="header_category">
		<div className="cta_category">What are you going to buy or sell today?</div>
		<ul className="header_menu_category">
			<li>
				<Link to="/">All</Link>
			</li>
			<li>
				<Link to="/cars">Cars</Link>
			</li>
			<li>
				<Link to="/bikes">Bikes</Link>
			</li>
			<li>
				<Link to="/fashion">Fashion</Link>
			</li>
			<li>
				<Link to="/tv">Tv / Audio</Link>
			</li>
			<li>
				<Link to="/cellphones">Cellphones</Link>
			</li>
			<li>
				<Link to="/electronic">Electronic</Link>
			</li>
			<li>
				<Link to="/collecting">Collecting</Link>
			</li>
			<li>
				<Link to="/construction">Construction</Link>
			</li>
			<li>
				<Link to="/services">Services</Link>
			</li>
			<li>
				<Link to="/jobs">Jobs</Link>
			</li>
			<li>
				<Link to="/others">Others</Link>
			</li>
		</ul>
	</div>
	);
};

export default NavbarCategory;
