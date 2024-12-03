import './App.css';
import Navigationbar from './components/Navigationbar';
import "./style/LandingPage.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Input from './pages/Input';
import Home from './pages/Home';
import FootBar from './components/FootBar'; 

function App() {
  return (
    <div className="app-container">
      <Router>
        <div className="myBG">
          <Navigationbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/input" element={<Input />} />
          </Routes>
        </div>
        <FootBar /> 
      </Router>
    </div>
  );
}

export default App;
