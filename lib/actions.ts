'use server';

import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';

import { saveMeal } from "./meals";

import { MealWithoutId } from "@/types";
import { redirect } from "next/navigation";

const isInvalidText = (text: string) => {
    return !text || text.trim().length === 0

}

const isInvalidMeal = (meal: MealWithoutId) => {
    return isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.image
}

export const shareMeal = async (prevMealFormData: any, mealFormData: FormData) => {
    const slug = slugify(mealFormData.get('title') as string, { lower: true })
    const instructions = xss(mealFormData.get('instructions') as string)
    const image = mealFormData.get('image') as File
    const imageExtension = image.name.split('.').pop()
    const fileName = `${slug}.${imageExtension}`
    const imagePath = `/images/${fileName}`

    const meal: MealWithoutId = {
        creator: mealFormData.get('name') as string,
        creator_email: mealFormData.get('email') as string,
        title: mealFormData.get('title') as string,
        summary: mealFormData.get('summary') as string,
        instructions,
        slug,
        image: imagePath
    }

    if (isInvalidMeal(meal)) {
        return {
            message: 'Invalid form data'
        }
    }

    // store the image in the filesystem meanwhile in the db we store the path to the image
    const stream = fs.createWriteStream(`public${imagePath}`)
    const bufferedImage = await image.arrayBuffer()
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            console.error('Error while saving the image:', error)
            throw new Error('Error while saving the image');
        }
    })

    await saveMeal(meal)
    redirect('/meals')
}