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
				<Link to="/category/cars">Cars</Link>
			</li>
			<li>
				<Link to="/category/bikes">Bikes</Link>
			</li>
			<li>
				<Link to="/category/fashion">Fashion</Link>
			</li>
			<li>
				<Link to="/category/tv">Tv / Audio</Link>
			</li>
			<li>
				<Link to="/category/cellphones">Cellphones</Link>
			</li>
			<li>
				<Link to="/category/electronic">Electronic</Link>
			</li>
			<li>
				<Link to="/category/collecting">Collecting</Link>
			</li>
			<li>
				<Link to="/category/construction">Construction</Link>
			</li>
			<li>
				<Link to="/category/services">Services</Link>
			</li>
			<li>
				<Link to="/category/jobs">Jobs</Link>
			</li>
			<li>
				<Link to="/category/others">Others</Link>
			</li>
		</ul>
	</div>
	);
};

export default NavbarCategory;
