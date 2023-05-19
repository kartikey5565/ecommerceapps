import React from "react";
import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const FooterElement = () => {
  return (
    <Fragment>
      <Container fluid className="bg-success">
        <Row>
          <Col className="m-auto"> <div className="text-center" style={{ "font-size": "2.5rem" }}> The Generics</div></Col>
          <Col>
              <Row className="align-items-center h-100" >
                <Col className="text-center my-1"><a href="https://www.youtube.com/"><img width={'25px'} src="https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg" alt="YT"/></a></Col>
                <Col className="text-center my-1"><a href="https://spotify.com/"><img width={'25px'} src="https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png" alt="SY"/></a></Col>
                <Col className="text-center my-1"><a href="https://facebook.com/"><img width={'25px'} src="https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png" alt="FB"/></a></Col>
              </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FooterElement;