import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = (props) => {
  return (
    <Card className='shadow-lg m-1 mx-auto' style={{ width: '18rem' }} >
      <Card.Header>Album 1</Card.Header>
      <Card.Img variant="top" src={props.item.imageUrl} />
      <Card.Body>
        <Card.Title> {props.item.title}</Card.Title>
        <p className='bg-danger'>$ {props.item.price}</p>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Item