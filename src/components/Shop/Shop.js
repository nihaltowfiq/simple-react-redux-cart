import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import { addToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";

function Shop(props) {
  const { products, addToCart } = props;
  console.log(props);
  return (
    <Container fluid>
      <h1>This is Shop</h1>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = { addToCart: addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
