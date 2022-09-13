import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import Card from "../UI/Card";
const Meals = () => {
  return (
    <Card>
     <MealsSummary />
      <AvailableMeals />
    </Card>  
  )
};

 export default Meals;