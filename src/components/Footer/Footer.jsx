import "./Footer.css";
import Container from "react-bootstrap/Container";
import Link from "react-router-dom";

export default function Footer() {
    return (
        <Container fluid>
            <footer className="footer">
                <p>
                    &copy; 2021 Zachary Swan Mitchell. All rights reserved.
                </p>
            </footer>
        </Container>
    );
}