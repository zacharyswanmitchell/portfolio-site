import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";

export default function NavBar() {
	const location = useLocation();
	const isHomePage = location.pathname === "/";
	const isAboutPage = location.pathname === "/about";
	const isProjectPage = location.pathname === "/projects";

	const [offCanvasNav, setOffCanvasNav] = useState(false);
	const offcanvasRef = useRef();

	const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

	function handleToggle() {
		if (isMobile) {
			setOffCanvasNav(!offCanvasNav);
		}
	}
	function closeOffCanvasNav() {
		setOffCanvasNav(false);
	}

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
							Zachary Mitchell
						</Navbar.Brand>
					</Link>
					<Navbar.Toggle
						aria-controls={`offcanvasNavbar-expand-sm`}
						onClick={handleToggle}
					/>
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-sm`}
						aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
						placement="end"
						show={offCanvasNav}
						onHide={closeOffCanvasNav}
						ref={offcanvasRef}
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
								Menu
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav>
								<Nav.Item>
									<Link
										to="/"
										className={`nav-link ${isHomePage ? "active" : ""}`}
										onClick={handleToggle}
									>
										Home
									</Link>
								</Nav.Item>
								&nbsp; &nbsp;
								<Nav.Item>
									<Link
										to="/about"
										className={`nav-link ${isAboutPage ? "active" : ""}`}
										onClick={handleToggle}
									>
										About
									</Link>
								</Nav.Item>
								&nbsp; &nbsp;
								<Nav.Item>
									<Link
										to="/projects"
										className={`nav-link ${isProjectPage ? "active" : ""}`}
										onClick={handleToggle}
									>
										Projects
									</Link>
								</Nav.Item>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}
