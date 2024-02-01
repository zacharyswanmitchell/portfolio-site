import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav className="navbar">
				<Link to="/">Home</Link>
				&nbsp; | &nbsp;
				<Link to="/about">About</Link>
				&nbsp; | &nbsp;
				<Link to="/projects">Projects</Link>
			</nav>
		</>
	);
}
