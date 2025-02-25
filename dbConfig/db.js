import "dotenv/config";
import postgres from "postgres";

console.log(process.env.DATABASE_URL)

const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });

export { sql };