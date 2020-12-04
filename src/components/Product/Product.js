import React from "react";
import { Card, Button } from "react-bootstrap";

function Product({ addToCart, product }) {
  const { id, name, img } = product;
  return (
    <div>
      <Card className="my-3">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            onClick={() => addToCart(id, name)}
            size="lg"
            variant="success"
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
