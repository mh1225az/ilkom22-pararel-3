import { Navbar, Container, Nav } from "react-bootstrap"

const Navigationbar = () => {
    return(
      <div className="intro1">
        <Navbar>
            <Container>
                <Navbar.Brand>Online Learning</Navbar.Brand>
             <Nav>
                <Nav.Link>HOME</Nav.Link>
                <Nav.Link>NOTIFICATION</Nav.Link>
                <Nav.Link>MY COURSE</Nav.Link>
             </Nav>
            </Container>
        </Navbar>
      </div> 
            
        
    )
}

export default Navigationbar;