import type { Character } from "$lib/types";
import type { Knex } from "knex";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

type Optional<Table extends Record<string, any>, Union extends keyof Table> = Omit<Table, Union> &
	Partial<Pick<Table, Union>>;

declare module "knex/types/tables" {
	interface Tables {
		base_character: Knex.CompositeTableType<Character, {}, {}, {}>;

		character: Knex.CompositeTableType<
			Character,
			Optional<Character, "id" | "image">,
			Partial<Omit<Character, "id">>,
			Optional<Character, "id" | "image">
		>;
	}
}

export {};
