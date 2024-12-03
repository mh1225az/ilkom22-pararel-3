import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
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
            <Nav.Link as={Link} to="/input">Input Materi</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Lainnya"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Profile Guru</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      
    </div>
    
  );
};

export default Navigationbar;
