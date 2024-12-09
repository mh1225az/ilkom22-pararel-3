import './App.css';
import Navigationbar from './components/Navigationbar';
import "./style/LandingPage.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Course from './pages/Course';
import ProfilePage from './pages/ProfilePage';
import FootBar from './components/FootBar'; 


function App() {
  return (
    <div className="app-container">
      <Router>
        <div className="myBG">
          <Navigationbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            
          </Routes>
        </div>
      </Router>
      <div className="app-container1">
      <FootBar /> 
      </div>
    </div>
  );
}

export default App;
