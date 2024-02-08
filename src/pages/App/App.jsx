import 'bootstrap/dist/css/bootstrap.min.css';// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import ProjectsIndex from "../ProjectsIndex/ProjectsIndex";

export default function App() {
	return (
    <main className="App">
      <NavBar />
      <Routes>
        {/* Route components in here */}
        <Route path="/" element={< HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
				<Route path="/projects" element={<ProjectsIndex />}/>
      </Routes>
      <Footer />
		</main>
	);
}
