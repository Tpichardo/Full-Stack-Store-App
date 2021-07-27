import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Nav.Link as={NavLink} to="/">
          <Navbar.Brand>👚 Boujee Betty Boutique</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Nav.Link>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/boutique">
                What's Hot
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/boutique/new">
                That's Hot
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
