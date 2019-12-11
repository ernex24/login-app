import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<div>
			<h1>Navbar</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/">Profile</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
