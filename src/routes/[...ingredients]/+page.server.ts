import type { Character } from "$lib/types.js";
import { error } from "@sveltejs/kit";
import { pg } from "$lib/server/db";

export async function load({ params }) {
	const ingredientNames = params.ingredients.split("/");

	const ingredients = await pg("base_character").whereIn("name", ingredientNames);

	if (ingredientNames.some((i) => !ingredients.find((x) => x.name == i))) {
		throw error(404, "Not Found");
	}

	const ingredientIds = ingredients.map((i) => i.id);

	const results = await pg<Character>(pg.raw("fusion_result(?)", [ingredientIds]));
	const result = results.length > 0 ? results[0] : null;

	const additions = await pg<Character>(
		pg.raw("possible_additions(?)", [ingredientIds]),
	);

	return {
		result,
		additions,
		ingredients: ingredients.sort(
			(a, b) => ingredientNames.indexOf(a.name) - ingredientNames.indexOf(b.name),
		),
	};
}
