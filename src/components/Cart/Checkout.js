import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
 const nameInputRef=useRef();
 const streetInputRef=useRef();
 const cityInputRef=useRef();
 const zipInputRef=useRef();

 const [formInputsValidity,setFormInputsValidity]=useState({
    name: true,
    city: true,
    street: true,
    zip: true
 })

 const isEmpty= element=>{
    if(element.length===0)
    return true
 }

 const isSixChars= element=>{
    if(element.length===0 || element.length!==6)
    return false
    return /^[0-9]+$/.test(element);
 }

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value
    const enteredCity=cityInputRef.current.value
    const enteredStreet=streetInputRef.current.value
    const enteredZip=zipInputRef.current.value

    const enteredNameIsValid=!isEmpty(enteredName.trim())
    const enteredCityIsValid=!isEmpty(enteredCity.trim())
    const enteredStreetIsValid=!isEmpty(enteredStreet.trim())
    const enteredZipIsValid=isSixChars(enteredZip.trim())
setFormInputsValidity({
    name: enteredNameIsValid,
    city: enteredCityIsValid,
    street: enteredStreetIsValid,
    zip: enteredZipIsValid    
})

    const isFormValid= enteredNameIsValid && enteredCityIsValid && enteredStreetIsValid && enteredZipIsValid
    if(!isFormValid)
    {
        return;
    }
    props.onSubmit({
        name:enteredName,
        city: enteredCity,
        street: enteredStreet,
        zip: enteredZip
    })
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={`${classes.control} ${formInputsValidity.name ? '':classes.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Invalid Name Entered</p>}
      </div>
      <div className={`${classes.control} ${formInputsValidity.city ? '':classes.invalid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}/>
        {!formInputsValidity.city && <p>Invalid City Entered</p>}

      </div>
      <div className={`${classes.control} ${formInputsValidity.street ? '':classes.invalid}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Invalid Street Entered</p>}

      </div>
      <div className={`${classes.control} ${formInputsValidity.zip ? '':classes.invalid}`}>
        <label htmlFor="zip">Zip</label>
        <input type="text" id="zip" ref={zipInputRef} />
        {!formInputsValidity.zip && <p>Invalid Zip Entered</p>}

      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit}>Submit</button>
      </div>
    </form>
  );
};

export default Checkout;
