import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';

const MealItemForm=props=>{
  const [isValid,setIsValid]=useState(true)
  const quantityRef=useRef()

  const submithandler=event=>{
     event.preventDefault();
     const entered=quantityRef.current.value
     const enteredQuantity=+entered

     if(entered.trim().length===0 || enteredQuantity<1 || enteredQuantity>5 )
     {
      setIsValid(false)
      return;
     }

     props.onAddToCart(enteredQuantity)

  }


    return(
      <form className={classes.form} onSubmit={submithandler}>
        <Input 
          ref={quantityRef}
        label="Quantity" input={{
            id:'quantity'+props.id,
            type:'number',
            min:'1',
            max: '5',
            step: '1'
        }} />
        <button>+ Add</button>
        {!isValid && <p>Please enter a valid quantity(1-5)</p>}

      </form>

    )
}

export default MealItemForm;
