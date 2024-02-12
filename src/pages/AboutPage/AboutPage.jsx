import "./AboutPage.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useEffect } from "react";

export default function AboutPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Container fluid className="about-container">
				<div className="about-brand">
					<h1>about me.</h1>
					<Image
						src={process.env.PUBLIC_URL + "/images/Z-E-costarica.JPG"}
						fluid
					/>
				</div>
				<div className="about-copy">
					<p>
						Hey! I'm Zachary Mitchell, a passionate and recently graduated
						full-stack developer on a journey to transform my career. My path to
						web development started with a career shift - I was an Agile
						Development Coordinator until May, facing the challenges of a job
						search. Following the recommendation of a close friend who had
						successfully completed the Software Engineering course at General
						Assembly, I decided to take the leap into the world of coding. Now,
						I'm eagerly seeking new opportunities in the field.
					</p>
				</div>
				<div className="about-copy-cont">
					<p>
						My educational background includes studies in Pastoral Ministries at
						Southeastern University in Lakeland, Florida, where I spent time
						volunteering in various ministries. While I cherish the experiences
						gained and friendships made, I realized my true passion lies in
						technology and creating meaningful solutions. In the realm of
						development, I find joy in crafting dynamic and responsive
						applications using JavaScript, Node.js, Express, React, Python, and
						Django.
					</p>
					<p>
						While I'm just embarking on my job search, I've already accumulated
						a repertoire of class projects that showcase my skills and
						dedication. Collaboration is at the heart of my process, having
						worked on two group projects where I learned the ins and outs of Git
						and version control. What drives me in the field of web development
						is the prospect of creating solutions that matter. I aspire to
						contribute to a workplace that values people and makes a positive
						impact on the world. Among my notable projects, I take pride in my
						work on projects like reHomr and Disc tracker, each offering a
						glimpse into my evolving skill set.
					</p>
					<p>
						I'm excited about the potential to contribute my skills and continue
						growing in the world of web development. Let's connect and explore
						the possibilities together!
					</p>
				</div>
			</Container>
		</>
	);
}
