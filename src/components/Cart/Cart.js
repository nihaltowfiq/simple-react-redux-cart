import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

function Cart(props) {
  const { cart, removeFromCart } = props;
  return (
    <Container className="text-center">
      <h2>
        <span className="badge badge-info">
          Cart:{" "}
          <span className="badge badge-pill badge-warning">{cart.length}</span>
        </span>
      </h2>
      <Row>
        <Col>
          {cart.map((pd) => (
            <span
              key={pd.cartId}
              className="badge badge-secondary m-1 p-2"
              style={{ fontSize: "20px" }}
            >
              {pd.cartId}. {pd.name}
              <button
                onClick={() => removeFromCart(pd.cartId)}
                className="btn btn-danger btn-sm ml-2"
              >
                X
              </button>
            </span>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { cart: state.cart };
};

const mapDispatchToProps = { removeFromCart: removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
