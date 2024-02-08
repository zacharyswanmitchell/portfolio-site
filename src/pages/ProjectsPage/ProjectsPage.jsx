import "./ProjectsPage.css";
import Container from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

export default function ProjectsPage() {
	return (
		<>
			<Container fluid className="projects-container">
			<h1>Projects</h1>
			<div>
				<p>Project 1</p>
				<p>This is my info for Project 1</p>
			</div>
			<div>
				<p>Project 2</p>
				<p>This is my info for Project 2</p>
			</div>
			<div>
				<p>Project 3</p>
				<p>This is my info for Project 3</p>
			</div>
			<div>
				<p>Project 4</p>
				<p>This is my info for Project 4</p>
			</div>
				</Container>
		</>
	);
}
