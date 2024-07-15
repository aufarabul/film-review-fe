import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
      <Container className="m-3">
        <Navbar.Brand href="/">BioskopNarasi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto " style={{ manHeight: "100px" }}>
            <Nav.Link href="/">Beranda</Nav.Link>

            <NavDropdown title="Genre" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/genre/1">Horror</NavDropdown.Item>
              <NavDropdown.Item href="/genre/6">Drama </NavDropdown.Item>

              <NavDropdown.Item href="/genre/2">Comedy </NavDropdown.Item>
              <NavDropdown.Item href="/genre/3">Action </NavDropdown.Item>
              <NavDropdown.Item href="/genre/4">Thriller </NavDropdown.Item>
              <NavDropdown.Item href="/genre/5">Romance </NavDropdown.Item>
              <NavDropdown.Item href="/genre/7">
                Science Fiction{" "}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/movies">Film</Nav.Link>
            <Nav.Link href="/tv">TV Series</Nav.Link>

            <Nav.Link href="#action2">Tentang Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
