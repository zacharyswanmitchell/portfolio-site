import "./Projects.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

export default function WeathermanPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Container fluid className="project-container">
				<div className="project-title">
					<h1>Weatherman</h1>
					<span>Front End Developer</span>
				</div>
				<div className="project-details">
					<div className="description">
						<h1>Project Overview</h1>
						Weatherman is a reimagined version of the classic game Hangman. It
						is a browser based game created with vanilla Javascript, HTML, and
						CSS. It has three difficulties based on some aspect of weather. It
						also has a win counter that is stored so you can return to your
						score.
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
							</div>
							<div className="tech-used-2">
								<ul></ul>
							</div>
						</div>
					</div>
				</div>
				<div className="project-buttons">
					<Button
						size="lg"
						href="https://zacharyswanmitchell.github.io/weatherman/"
						variant="outline-primary"
						className="aboutme-button"
					>
						Deployed Site
					</Button>{" "}
					<Button
						size="lg"
						href="https://github.com/zacharyswanmitchell/weatherman/blob/main/README.md"
						variant="outline-primary"
						className="aboutme-button"
					>
						Github
					</Button>{" "}
				</div>
				<div className="project-screenshots">
					<h1>Screenshots</h1>
					<div className="web-screenshots">
						<img src="/images/weatherman/Screenshot2023-10-12.png" alt="" />
						<img src="/images/weatherman/Screenshot2023-10-12b.png" alt="" />
						<img src="/images/weatherman/weatherman-during.png" alt="" />
					</div>
				</div>
			</Container>
		</>
	);
}
