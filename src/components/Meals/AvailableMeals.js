import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
const AvailableMeals = () => {
  const [meals,setMeals]=useState([])
  const[loading,isLoading]=useState(false)
  const[httpError,setHttpError]=useState(null)
  // const DUMMY_MEALS = [
  //   {
  //     id: "m1",
  //     name: "Gulabjaam",
  //     description: "Finest combination of sweetness and flavour",
  //     price: 50,
  //   },
  //   {
  //     id: "m2",
  //     name: "Shrikhanda",
  //     description: "A pure Puneri delicacy",
  //     price: 60,
  //   },
  //   {
  //     id: "m3",
  //     name: "Puranpoli",
  //     description:
  //       "A rural Maharashtrian delicacy which is healthy and tasty at the same time",
  //     price: 40,
  //   },
  //   {
  //     id: "m4",
  //     name: "Naral Bhaat",
  //     description:
  //       "A delicacy from the beautiful Kokan strip that will bless your taste buds ",
  //     price: 40,
  //   },
  // ];

  useEffect(()=>{
    isLoading(true)
    fetch('https://meals-app-9a4e4-default-rtdb.firebaseio.com/meals.json')
    .then((data)=>{
      return data.json()
    })
    .then((data)=>{
      //data.map(element=>console.log(element))
       console.log("Data",data)
       const loadedMeals=[]

     //const data1=data.json()
      for(const key in data)
      {
        loadedMeals.push({
          id:key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
      setMeals(loadedMeals)
      isLoading(false)
    }
    )
    .catch((error)=>{
      isLoading(false)
      setHttpError(error.message)
      console.log("Something went wrong",error.message)
     } )
  },[])

  if(loading)
  {
    return(
      <center>
      <Spinner animation="border" role="status" variant='primary'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </center>
    )
  }

  if(httpError)
  {
    return(
      <div className={classes.error}>
        <p>{httpError}</p>
      </div>
    )
  }
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {meals.map((x) => (
            <MealItem
              key={x.id}
              name={x.name}
              description={x.description}
              price={x.price}
              id={x.id}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
