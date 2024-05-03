import Link from 'next/link'

import classes from './meals.module.css'

import { getMeals } from '@/lib/meals'

import MealsList from '@/components/Meals/MealsList'

const Meals = async () => {
  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Amazing recipe created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsList meals={meals} />
      </main>
    </>
  )
}

export default Meals