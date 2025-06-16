import React from "react";
import styles from "./Cart.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../Cart/CartContext";

const QuantityBox = ({ quantity, onChange }) => (
  <div className={styles.quantityBox}>
    <div className={styles.display}>{quantity}</div>
    <div className={styles.arrows}>
      <button onClick={() => onChange(quantity + 1)}>▲</button>
      <button onClick={() => onChange(Math.max(1, quantity - 1))}>▼</button>
    </div>
  </div>
);

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();

  const handleProceedToCheckout = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
    navigate("/bill", { state: { cartItems, total } });
  };

  return (
    <div className={styles.MainSection}>
      <div className={styles.SectionOne}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </div>

      <div className={styles.SectionTwo}>
        <div className={styles.Row}>
          <p>Product</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Subtotal</p>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map(({ product, quantity }) => (
            <div className={styles.Row} key={product.id}>
              <p>
                <img
                  src={product?.one}
                  alt={product?.name}
                  className={styles.ProductImage}
                />
                {product?.name}
              </p>
              <p>${product?.price}</p>
              <QuantityBox
                quantity={quantity}
                onChange={(newQty) => {
                  product.quantity = newQty;
                }}
              />
              <p>${product?.price * quantity}</p>
              <button
                onClick={() => removeFromCart(product.id)}
                className={styles.removeBtn}
              >
                ❌
              </button>
            </div>
          ))
        ) : (
          <p className={styles.emptyCartMessage}>Your cart is empty.</p>
        )}

        <div className={styles.LastSection}>
          <Link to="/">
            <button>Return To Shop</button>
          </Link>
          <Link to="/">
            <button>Update Cart</button>
          </Link>
        </div>
      </div>

      <div className={styles.ThirdSection}>
        <div className={styles.RightSide}>
          <div className={styles.Gap}>
            <h1>Cart Total</h1>
            <p>
              Subtotal{" "}
              <span>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0
                )}
              </span>
            </p>
            <hr></hr>
            <p>
              Shipping <span>Free</span>
            </p>
            <hr></hr>
            <p>
              Total{" "}
              <span>
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
                  0
                )}
              </span>
            </p>
            <hr></hr>
            <button
              onClick={handleProceedToCheckout}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
