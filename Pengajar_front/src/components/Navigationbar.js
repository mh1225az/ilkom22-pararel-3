import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

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
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Notivication</Nav.Link>
            <Nav.Link>My Course</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Lainnya"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
