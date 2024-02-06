import "./HomePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<>
			<Container fluid className="brand-container">
				<div className="brand-info">
					<h1>Zachary Swan Mitchell</h1>
					<h2>Full Stack Developer</h2>
					<p>
						Hey, Hello, How are ya?<span>- Vaughn from Community</span>
					</p>
				</div>

				<Image src="/images/homepage-crop.jpeg" fluid />
			</Container>
			<Container fluid className="aboutme-home-container">
				<div>
					<h2 className="aboutme-home">About Me.</h2>
					<p className="aboutme-home-blurb">
						Results-driven Full Stack Developer with a commitment to
						sustainability. Transitioned from a dynamic role as Agile
						Development Coordinator to achieve proficiency in JavaScript,
						Node.js, React, and more through General Assembly.
					</p>
					<div className="button-container">
						<Button
							href="/about"
							variant="outline-primary"
							className="aboutme-button"
						>
							Read More
						</Button>{" "}
					</div>
				</div>
			</Container>
			<div className="projects-home">
				<h1>Projects</h1>
				<Container fluid>
					<Row>
						<Col>
							<Link to="https://rehomr-58ea4d4dc5ca.herokuapp.com/">
								<Card>
									<Card.Img variant="top" src="images/rehomr/home.png" />
									<Card.Body>
										<Card.Title>reHomr</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Link>
						</Col>
						<Col>
							<Link to="https://disc-golf-inventory-manager-230ba0ac5328.herokuapp.com/">
								<Card>
									<Card.Img
										variant="top"
										src="/images/disctracker/SCR-20231103-owfg.png"
									/>
									<Card.Body>
										<Card.Title>Disc Golf App</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col>
							<Link to="https://zacharyswanmitchell.github.io/weatherman/">
								<Card>
									<Card.Img
										variant="top"
										src="/images/weatherman/weatherman-during.png"
									/>
									<Card.Body>
										<Card.Title>WeatherMan</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</Card.Text>
									</Card.Body>
								</Card>
							</Link>
						</Col>
						<Col>
							<Card>
								<Card.Img variant="top" src="/images/arenal-crop.jpeg" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
