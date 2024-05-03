export interface Meal {
    id: number,
    title: string,
    slug: string,
    image: string,
    instructions: string,
    summary: string,
    creator: string,
    creator_email: string
}

export type MealWithoutId = Omit<Meal, 'id'>
