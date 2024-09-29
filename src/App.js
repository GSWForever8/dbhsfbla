import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Home from './pages/Home';
import Compevents from './pages/Compevents';
import Projects from './pages/Projects';
import QA from './pages/QA';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg nav">
          <Link className="navbar-brand bar" to="/">DBHS FBLA</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link bar" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link bar" to="/compevents">Competitive Events</Link></li>
              <li className="nav-item"><Link className="nav-link bar" to="/projects">Projects</Link></li>
              <li className="nav-item"><Link className="nav-link bar" to="/qa">Q&A</Link></li>
              <li className="nav-item"><Link className="nav-link bar" to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </nav>
        <div className="contentwrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compevents" element={<Compevents />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      <footer className="footer">
        <p>DBHS FBLA 2024 © Developed by Aidan Hong</p>
      </footer>
    </Router>
  );
}

export default App;
