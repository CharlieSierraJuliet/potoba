import CartContext from "./cart-context"
import { useReducer } from "react"

const defautState={
    items:[],
    totalAmount:0
}

const cartReducer=(state,action)=>{
    if(action.type==='ADD')
    {
        const updatedItems=state.items.concat(action.item)
        const updatedTotalAmount=state.totalAmount+action.item.quantity*action.item.price

        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
        
    }
    return defautState;
}
const CartProvider=props=>{

    const[cartState,dispatchCartAction]=useReducer(cartReducer,defautState)
    const addItemToCart=item=>{
        dispatchCartAction({type:'ADD', item:item})
    }
    const removeItemFromCart=id=>{
        dispatchCartAction({type:'REMOVE', id:id})
    }

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCart,
        removeItem:removeItemFromCart
    }
    return(
        <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    )
}

export default CartProvider;