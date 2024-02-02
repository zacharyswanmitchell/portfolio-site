import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
	const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isAboutPage = location.pathname === '/about';
    const isProjectPage = location.pathname === '/projects';
	return (
		<>
			<Navbar expand="sm" className="navbar">
				<Container fluid>
					<Link className="brand-wrapper" to="/">
						<Navbar.Brand href="#home">
							<img
								alt=""
								src="../images/IMG_9819.jpeg"
								className="brand-image"
							/>{" "}
							Zachary Swan Mitchell
						</Navbar.Brand>
					</Link>
					<Nav>
						<Link to="/">Home</Link>
						&nbsp; | &nbsp;
						<Link to="/about">About</Link>
						&nbsp; | &nbsp;
						<Link to="/projects">Projects</Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}
