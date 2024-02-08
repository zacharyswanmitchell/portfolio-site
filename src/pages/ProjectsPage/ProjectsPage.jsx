import "./ProjectsPage.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function ProjectsPage() {
	return (
		<>
			<div className="projects-title">
				<h1>Projects</h1>
			</div>
			<Container>
				<Link to="/projects/rehomr">
					<Card>
						<Card.Img variant="top" src="images/rehomr/home.png" />
						<Card.Body>
							<Card.Title>Rehomr</Card.Title>
							<Card.Text>
								A web application designed to streamline the pet adoption
								process
							</Card.Text>
						</Card.Body>
					</Card>
				</Link>
				<Link to="/projects/disc-tracker">
					<Card>
						<Card.Img
							variant="top"
							src="/images/disctracker/SCR-20231103-owfg.png"
						/>
						<Card.Body>
							<Card.Title>Disc Tracker</Card.Title>
							<Card.Text>
								A web application for tracking your disc golf inventory
							</Card.Text>
						</Card.Body>
					</Card>
				</Link>
				<Link to="/projects/weatherman">
					<Card>
						<Card.Img
							variant="top"
							src="/images/weatherman/weatherman-during.png"
						/>
						<Card.Body>
							<Card.Title>Weatherman</Card.Title>
							<Card.Text>A reimagined version of the classic Hangman</Card.Text>
						</Card.Body>
					</Card>
				</Link>
			</Container>
		</>
	);
}
