import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {

 const cartCtx=useContext(CartContext)
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
       <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} total={item.quantity*item.price} />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onCancel}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCancel}>Cancel</button>
        {cartCtx.items.length>0 && <button className={classes.button}>Place Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
