import Link from 'next/link';
import Image from 'next/image';

import classes from './meal.module.css';
import { Meal } from '@/types';

interface MealItemProps {
    meal: Meal
    }

const MealItem = ({meal}: MealItemProps) => {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill sizes='100%' />
        </div>
        <div className={classes.headerText}>
          <h2>{meal.title}</h2>
          <p>by {meal.creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{meal.summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${meal.id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}

export default MealItem;