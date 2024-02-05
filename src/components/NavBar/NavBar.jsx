import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
	const location = useLocation();
	const isHomePage = location.pathname === "/";
	const isAboutPage = location.pathname === "/about";
	const isProjectPage = location.pathname === "/projects";
	return (
		<>
			<Navbar expand="sm" className="navbar">
				<Container fluid>
					<Link className="brand-wrapper" to="/">
						<Navbar.Brand href="#home">
							<img
								alt=""
								src="../images/headshot.png"
								className="brand-image"
							/>{" "}
							Zachary Swan Mitchell
						</Navbar.Brand>
					</Link>
					<Nav>
						<Link to="/" className={`nav-link ${isHomePage ? "active" : ""}`}>
							Home
						</Link>
						&nbsp; | &nbsp;
						<Link
							to="/about"
							className={`nav-link ${isAboutPage ? "active" : ""}`}
						>
							About
						</Link>
						&nbsp; | &nbsp;
						<Link
							to="/projects"
							className={`nav-link ${isProjectPage ? "active" : ""}`}
						>
							Projects
						</Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}
