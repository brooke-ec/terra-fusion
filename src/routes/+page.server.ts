import { pg } from "$lib/server/db";

export async function load() {
	const result = await pg("base_character");

	return { baseCharacters: result };
}
