import "./ProjectsIndex.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";

export default function ProjectsIndex() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className="projects-title">
				<h1>projects.</h1>
			</div>
			<Container fluid className="projects-container">
				<Link to="/projects/rehomr">
					<Card className="projects-card">
					<Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/rehomr/home.png"} />

						<Card.Body>
							<Card.Title>Rehomr</Card.Title>
							<Card.Text>
								A web application designed to streamline the pet adoption
								process
							</Card.Text>
						</Card.Body>
					</Card>
				</Link>
				<Link to="/projects/disctracker">
					<Card className="projects-card">
					<Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/disctracker/SCR-20231103-owfg.png"} />

						<Card.Body>
							<Card.Title>Disc Tracker</Card.Title>
							<Card.Text>
								A web application for tracking your disc golf inventory
							</Card.Text>
						</Card.Body>
					</Card>
				</Link>
				<Link to="/projects/weatherman">
					<Card className="projects-card">
					<Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/weatherman/weatherman-during.png"} />
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
