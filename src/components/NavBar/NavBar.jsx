import { Link } from "react-router-dom";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
	return (
		<>
			<Navbar expand="sm" className="bg-body-tertiary">
				<Container fluid>
					<Link className="navbar-brand-wrap" to="/">
						<Navbar.Brand href="#home">
							<img
								alt=""
								src="../images/BC57DA6B-3F1F-4246-8D59-29F9A84F5534.JPG"
								width="30"
								height="30"
								// className=""
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
