import "./Projects.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function DisctrackerPage() {
	return (
		<>
			<Container fluid className="project-container">
				<div className="project-title">
					<h1>DiscTracker</h1>
					<span>Full Stack Developer</span>
				</div>
				<div className="project-details">
					<div className="description">
						<h1>Project Overview</h1>
						DiscTracker is a disc golf app that allows you to keep track of
						your bags and discs. When I am playing I can never remember which
						discs I have in my bag and what their flight numbers are. This app
						will allow you to keep track of all of that information.
					</div>
					<div className="tech">
						<h1>Technologies Used</h1>
						<div className="tech-list">
							<div className="tech-used-1">
								<ul>
									<h2>Frontend</h2>
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
									<li>AJAX/Axios</li>
									<li>Trello</li>
									<li>Heroku</li>
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
