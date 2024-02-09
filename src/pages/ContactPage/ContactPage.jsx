import "./ContactPage.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect } from "react";

export default function ContactPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Container className="contact-container">
				<h1>Contact</h1>
				<div className="contact-form-wrap">
					<ContactForm />
				</div>
			</Container>
			<Container className="contact-socials">
				<h2></h2>
				<div className="socials">
					<a
						href="https://www.linkedin.com/in/zacharysmitchell/"
						target="_blank"
						rel="noreferrer"
					>
						<FaLinkedin className="social-icon" />
					</a>
					<a
						href="https://github.com/zacharyswanmitchell"
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub className="social-icon" />
					</a>
				</div>
			</Container>
		</>
	);
}
