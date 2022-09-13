import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";
const AvailableMeals = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Gulabjaam",
      description: "Finest combination of sweetness and flavour",
      price: 50,
    },
    {
      id: "m2",
      name: "Shrikhanda",
      description: "A pure Puneri delicacy",
      price: 60,
    },
    {
      id: "m3",
      name: "Puranpoli",
      description:
        "A rural Maharashtrian delicacy which is healthy and tasty at the same time",
      price: 40,
    },
    {
      id: "m4",
      name: "Naral Bhaat",
      description:
        "A delicacy from the beautiful Kokan strip that will bless your taste buds ",
      price: 40,
    },
  ];

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((x) => (
            <MealItem
              key={x.id}
              name={x.name}
              description={x.description}
              price={x.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
