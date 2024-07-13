import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">BioskopNarasi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Beranda</Nav.Link>

            <NavDropdown title="Genre" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/genre/1">Horror</NavDropdown.Item>
              <NavDropdown.Item href="/genre/6">Drama </NavDropdown.Item>

              <NavDropdown.Item href="/genre/2">Comedy </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Tentang Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
