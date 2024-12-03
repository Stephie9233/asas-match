import pg from "pg";
import "dotenv/config";

const PG_URL = process.env.PG_URL;
const { Client } = pg;

export const client = new Client(PG_URL);

await client.connect();