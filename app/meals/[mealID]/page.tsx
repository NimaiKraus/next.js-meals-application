import Image from 'next/image';

import { getMeal } from '@/lib/meals';

import classes from './meal.module.css';

import { Meal } from '@/types';
import { notFound } from 'next/navigation';

const MealDetail = async ({ params }: { params: Record<string, number> }) => {
  const meal: Meal = await getMeal(params.mealID);

  !meal && notFound();

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>
            {meal.summary}
          </p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, '<br />')
          }}
        />
      </main>
    </>
  )
}

export default MealDetail