import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid d-flex justify-content-between">
				<span className="navbar-brand mb-0 fs-5">Start Bootstrap</span>
				<ul className="navbar-nav flex-row">
					<li className="nav-item mx-2">
						<a class="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li className="nav-item mx-2">
						<a className="nav-link " href="#">About</a>
					</li>
					<li className="nav-item mx-2">
						<a className="nav-link " href="#">Services</a>
					</li>
					<li className="nav-item mx-2">
						<a className="nav-link " href="#">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;