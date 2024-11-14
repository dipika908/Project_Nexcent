import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar, NavLink } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { nav } from "../constant";

const Header = ({ href, name }) => {
  return (
    <Container className=" bg-light">
      <Navbar
        expand="lg"
        className="bg-body-tertiary "
        data-aos="zoom-out-down"
      >
        <Navbar.Brand href="">
          <img src="logo.svg" className="mb-3" alt="Images" />
          &nbsp;&nbsp;
          <span className="fs-2 fw-bold my-auto">Nexcent</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto  gap-1  ">
            {nav.map((item) => (
              <Nav.Link key={item.name} href={item.href}>
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
          <div className="d-flex gap-1 justify-content-end">
            <Button variant="outline-success">Login</Button>
            <Button variant="btn btn-success">Signup</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
