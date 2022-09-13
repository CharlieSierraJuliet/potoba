import Card from '../UI/Card';
import classes from './MealItem.module.css'

const MealItem=props=>{
    return(
        <Card className={classes.meal}>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>₹{props.price}</div>
        </Card>

    )

}

export default MealItem;