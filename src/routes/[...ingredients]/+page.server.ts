import { error } from "@sveltejs/kit";
import { pg } from "$lib/server/db";

export async function load({ params }) {
	const ingredientNames = params.ingredients.split("/");

	const ingredients = await pg("character").whereIn("name", ingredientNames);

	if (ingredientNames.some((i) => !ingredients.find((x) => x.name == i))) {
		throw error(404, "Not found");
	}

	return {
		ingredients: ingredients.sort(
			(a, b) => ingredientNames.indexOf(a.name) - ingredientNames.indexOf(b.name),
		),
	};
}
