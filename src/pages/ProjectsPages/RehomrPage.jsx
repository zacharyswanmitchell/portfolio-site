import "./Projects.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function RehomrPage() {
	return (
		<>
			<Container fluid className="project-container">
				<div className="project-title">
					<h1>reHomr</h1>
					<span>Front End & UI/UX</span>
				</div>
				<div className="project-details">
					<div className="description">
						<h1>Project Overview</h1>
						reHomr is a web application designed to streamline the process of
						connecting pets in need of a home with individuals or families
						looking to adopt. The platform serves as a bridge between pet owners
						or rescue organizations and potential adopters, facilitating the
						adoption process and providing a centralized space for users to
						explore, learn about, and connect with pets.
					</div>
					<div className="tech">
						<h1>Technologies Used</h1>
						<div className="tech-list">
							<div className="tech-used-1">
								<ul>
									<h2>Frontend</h2>
									<li>React.js</li>
									<li>HTML</li>
									<li>CSS</li>
									<li>JavaScript</li>
								</ul>
								<ul>
									<h2>Backend</h2>
									<li>Node.js</li>
									<li>Express.js</li>
									<li>MongoDB</li>
								</ul>
							</div>
							<div className="tech-used-2">
								<ul>
									<h2>Other Tools</h2>
									<li>Bootstrap</li>
									<li>AJAX/Axios</li>
									<li>Trello</li>
									<li>Figjam</li>
									<li>Heroku</li>
									<li>Google Maps API</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="project-buttons">
					<Button href="" variant="outline-primary" className="aboutme-button">
						Deployed Site
					</Button>{" "}
					<Button href="" variant="outline-primary" className="aboutme-button">
						Github
					</Button>{" "}
				</div>
				<div className="project-screenshots">
					<h1>Web Screenshots</h1>
					<div className="web-screenshots">
						<img src="" alt="" />
						<img src="" alt="" />
						<img src="" alt="" />
						<img src="" alt="" />
						<img src="" alt="" />
					</div>
				</div>
			</Container>
		</>
	);
}
