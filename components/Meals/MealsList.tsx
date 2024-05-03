import MealItem from "./Meal"

import classes from './meals-list.module.css'

import { Meal } from "@/types"

interface MealsListProps {
    meals: Meal[]
}

const MealsList = ({ meals }: MealsListProps) => {
    return (
        <ul className={classes.meals}>
            {meals.map(meal => (
                <li key={meal.id}>
                    <MealItem meal={meal} />
                </li>
            ))}
        </ul>
    )
}

export default MealsList