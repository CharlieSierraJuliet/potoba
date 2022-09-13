import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const dummy = [{ id: "1", name: "placeholder", amount: 2, price: 20 }];
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {dummy.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onCancel}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>30</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCancel}>Cancel</button>
        <button className={classes.button}>Place Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
