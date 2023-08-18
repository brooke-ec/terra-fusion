import { DB_URL } from "$env/static/private";
import knex from "knex";

export const pg = knex({
	connection: DB_URL,
	client: "pg",
});
