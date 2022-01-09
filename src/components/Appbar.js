import React from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Container,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Appbar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand className="text-primary logo">EHSAAS</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text className="navbartext">
              Millions of people's life has changed, millions more awaiting your
              donation.
            </Navbar.Text>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link eventKey={2} href="#memes" className="me-2">
              <Button variant="primary" className="me-2">
                Donate
              </Button>
              <Button variant="primary" className="me-2">
                UK Doner
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing">About us</Nav.Link>
              <Nav.Link href="#pricing">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More Info</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Appbar;
