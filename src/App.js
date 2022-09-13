import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCart, setIsCart]=useState(false)

  const showCart=()=>{
    setIsCart(true)
  }

  const hideCart=()=>{
    setIsCart(false)
  }
  return (
    <div className="App">
     {isCart && <Cart onCancel={hideCart} />}
      <Header onChange={showCart}/>
    <main>
      <Meals />
      </main>
    </div>
  );
}

export default App;
