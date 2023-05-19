import React from "react";
import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="dark">cart <Badge className="ms-1">0</Badge> </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;