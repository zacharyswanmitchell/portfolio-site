import "./HomePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function HomePage() {
	return (
		<>
			<Container fluid className="brand-container">
				<h1 className="fullName">Zachary Swan Mitchell</h1>
				<div className="photo-container">
					<Image src="/images/fullbodyshot.jpeg" fluid />
				</div>
			</Container>
			<Container fluid className="aboutme-home-container">
				<div>
					<h2 className="aboutme-home">About Me.</h2>
					<p className="aboutme-home-blurb">
						Results-driven Full Stack Developer with a commitment to
						sustainability. Transitioned from a dynamic role as a Development
						Coordinator to achieve proficiency in JavaScript, Node.js, React,
						and more through General Assembly.
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
				</div>
			<Container fluid className="projects-home-container">
				<Row>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src="images/rehomr/home.png" />
							<Card.Body>
								<Card.Title>reHomr</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src="/images/disctracker/SCR-20231103-owfg.png" />
							<Card.Body>
								<Card.Title>Disc Golf App</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src="/images/weatherman/weatherman-during.png" />
							<Card.Body>
								<Card.Title>WeatherMan</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Img variant="top" src="/images/arenal-crop.jpeg" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}
