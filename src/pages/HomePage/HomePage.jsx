import "./HomePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Container fluid className="brand-container">
				<div className="brand-info">
					<h1>zachary swan mitchell</h1>
					<h2>full stack developer</h2>
					<h3>hey, hello, how are ya?</h3>
				</div>

				<Image
					src={process.env.PUBLIC_URL + "/images/homepage-crop.jpeg"}
					fluid
				/>
			</Container>
			<Container fluid className="aboutme-home-container">
				<div>
					<h1 className="aboutme-home">about me.</h1>
					<p className="aboutme-home-blurb">
						Transitioned from a dynamic role as an Agile Development Coordinator
						to achieve proficiency in JavaScript, Node.js, React, and more
						through General Assembly.
					</p>
					<div className="button-container">
						<Link to="/about">
						<Button
							variant="outline-primary"
							className="aboutme-button"
							size="lg"
							>
							Read More
						</Button>{" "}
							</Link>
					</div>
				</div>
			</Container>
			<div className="projects-home">
				<h1>projects.</h1>
				<Container fluid>
					<Row>
						<Col>
							<Link to="/projects/rehomr">
								<Card>
									<Card.Img
										variant="top"
										src={process.env.PUBLIC_URL + "/images/rehomr/home.png"}
									/>

									<Card.Body>
										<Card.Title>reHomr</Card.Title>
										<Card.Text>
											A web application designed to streamline the pet adoption
											process
										</Card.Text>
									</Card.Body>
								</Card>
							</Link>
						</Col>
						<Col>
							<Link to="/projects/disctracker">
								<Card>
									<Card.Img
										variant="top"
										src={
											process.env.PUBLIC_URL +
											"/images/disctracker/SCR-20231103-owfg.png"
										}
									/>

									<Card.Body>
										<Card.Title>Disc Golf App</Card.Title>
										<Card.Text>
											A web application for tracking your disc golf inventory
										</Card.Text>
									</Card.Body>
								</Card>
							</Link>
						</Col>
						<Col>
							<Link to="/projects/weatherman">
								<Card>
									<Card.Img
										variant="top"
										src={
											process.env.PUBLIC_URL +
											"/images/weatherman/weatherman-during.png"
										}
									/>
									<Card.Body>
										<Card.Title>WeatherMan</Card.Title>
										<Card.Text>
											A reimagined version of the classic Hangman
										</Card.Text>
									</Card.Body>
								</Card>
							</Link>
						</Col>
					</Row>
					<Row>
						{/* <Col>
							<Card>
								<Card.Img variant="top" src={
											process.env.PUBLIC_URL + "/images/arenal-crop.jpeg"} />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col> */}
					</Row>
				</Container>
			</div>
		</>
	);
}
