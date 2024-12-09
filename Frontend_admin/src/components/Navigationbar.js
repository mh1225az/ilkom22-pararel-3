import { Navbar, Container, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <div className="intro1">
      <Navbar>
        <Container>
          <div>
            <Navbar.Brand><img src={'http://www.aerosystems.it/wp-content/uploads/2022/01/LMS-logo.png'}
              alt=""
              style={{ width: '90px' }}
            /></Navbar.Brand>
          </div>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/">My Course</Nav.Link>
            <Nav.Link as={Link} to="/input">Input Materi</Nav.Link>
            <Nav.Link as={Link} to="/profilepage">Profile</Nav.Link>
            <Nav.Link>Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </div>
    
  );
};

export default Navigationbar;
