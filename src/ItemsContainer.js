import React from "react";
import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./Item";

const ItemsContainer = (props) => {
  return (
    <Fragment>
      <Container className="text-center mx-auto">
        <Row xs={1} md={2}>
            {props.data.map(item=> <Col>
            <Item item={item} />
          </Col>)}
        </Row>
      </Container>
    </Fragment>
  );
};

export default ItemsContainer;