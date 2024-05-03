'use server'

import { MealWithoutId } from "@/types";

const sql = require('better-sqlite3');
const db = sql('meals.db');

export const getMeals = async () => db.prepare('SELECT * FROM meals').all();

export const getMeal = async (id: number) => db.prepare('SELECT * FROM meals WHERE id = ?').get(id);

export const saveMeal = async (meal: MealWithoutId) => {
    const stmt = db.prepare('INSERT INTO meals (title, slug, image, instructions, summary, creator, creator_email) VALUES (@title, @slug, @image, @instructions, @summary, @creator, @creator_email)');
    return stmt.run(meal);
};

export const deleteMeal = async (id: number) => {
    const stmt = db.prepare('DELETE FROM meals WHERE id = ?');
    return stmt.run(id);
}
