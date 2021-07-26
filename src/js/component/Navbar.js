import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const data = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark sticky-top">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<i className="fas fa-jedi" />
					STARWARS
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="#">
					<DropdownButton align="end" title="Favorites" id="dropdown-menu-align-right" variant="warning">
						<Dropdown.Item eventKey="1">Login</Dropdown.Item>
						<Dropdown.Item eventKey="2">Sign Up</Dropdown.Item>
						<Dropdown.Item eventKey="3">Help</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item eventKey="4">Logout</Dropdown.Item>
					</DropdownButton>
				</Link>
			</div>
		</nav>
	);
};
