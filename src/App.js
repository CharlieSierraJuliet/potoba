import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCart, setIsCart]=useState(false)

  const showCart=()=>{
    setIsCart(true)
  }

  const hideCart=()=>{
    setIsCart(false)
  }
  return (
    <CartProvider>
     {isCart && <Cart onCancel={hideCart} />}
      <Header onChange={showCart}/>
    <main>
      <Meals />
      </main>
      </CartProvider>
  );
}

export default App;
