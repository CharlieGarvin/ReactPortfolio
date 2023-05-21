import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from './Pages/ProjectDisplay';


function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />}/>
        </Routes>
      </Router> 
      <Footer />
    </div>
  );
}

export default App;
