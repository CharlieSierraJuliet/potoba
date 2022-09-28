import { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          total={item.quantity * item.price}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const handleCheckout = (userData) => {
    setIsSubmitting(true);
    fetch(`https://meals-app-9a4e4-default-rtdb.firebaseio.com/orders.json`, {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        items: cartCtx.items,
      }),
    }).then(() => {
      setIsSubmitting(false);
      setDidSubmit(true)
      cartCtx.clearCart()
    });
  };

  const onPlaceOrder = () => {
    setIsCheckout(true);
    //return alert("Order Placed successfully");
  };
  return (
    <Fragment>
  {!isSubmitting && !didSubmit && <Modal onClick={props.onCancel}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onSubmit={handleCheckout} onCancel={props.onCancel} />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onCancel}>
            Cancel
          </button>
          {cartCtx.items.length > 0 && (
            <button className={classes.button} onClick={onPlaceOrder}>
              Place Order
            </button>
          )}
        </div>
      )}
    </Modal>

  }

  {isSubmitting && <Modal onClick={props.onCancel}>
   <p> Placing your order....</p>
    </Modal>}

  {
    didSubmit &&  <Modal onClick={props.onCancel}>
    <p>Order Placed successfully</p>
    </Modal>
  }
  </Fragment>
  );
};

export default Cart;
