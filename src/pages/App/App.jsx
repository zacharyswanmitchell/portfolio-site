import "bootstrap/dist/css/bootstrap.min.css"; // import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import ProjectsIndex from "../ProjectsIndex/ProjectsIndex";
import RehomrPage from "../ProjectsPages/RehomrPage";
import DisctrackerPage from "../ProjectsPages/DisctrackerPage";
import WeathermanPage from "../ProjectsPages/WeathermanPage";
import ContactPage from "../ContactPage/ContactPage";

export default function App() {
	return (
		<main className="App">
			<NavBar />
			<Routes>
				{/* Route components in here */}
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/projects" element={<ProjectsIndex />} />
				<Route path="/projects/rehomr" element={<RehomrPage />} />
				<Route path="/projects/disctracker" element={<DisctrackerPage />} />
				<Route path="/projects/weatherman" element={<WeathermanPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
			<Footer />
		</main>
	);
}
