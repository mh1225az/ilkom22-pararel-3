import './App.css';
import Navigationbar from './components/Navigationbar';
import "./style/LandingPage.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Input from './pages/Input';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import FootBar from './components/FootBar'; 
import Materi from './pages/DisplayMateri'; 

function App() {
  return (
    <div className="app-container">
      <Router>
        <div className="myBG">
          <Navigationbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/input" element={<Input />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/DisplayMateri" element={<Materi />} />
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
