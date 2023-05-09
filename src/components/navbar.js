import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { slide as Menu } from "react-burger-menu";
import "./navbar.scss";

import NavDropdown from "react-bootstrap/NavDropdown";
import HamburguerMenu from "./HamburguerMenu";
function NavbarComponent(props) {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav.Link></Nav.Link>
          <Navbar.Brand href="#home">
            {" "}
            <Image
              className="icono-imagen"
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg"
              fluid
            ></Image>
          </Navbar.Brand>
          <Nav className="me-auto">{props.children}</Nav>
          <Form className="d-flex"></Form>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarComponent;
