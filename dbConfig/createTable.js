import { sql } from "./db.js";

async function createTables() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS users_table (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                password TEXT NOT NULL
            );
        `;
        console.log("Table users_table created");

        await sql`
            CREATE TABLE IF NOT EXISTS items_table (
                id SERIAL PRIMARY KEY,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                finished BOOLEAN NOT NULL,
                user_id INTEGER NOT NULL,
                CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users_table(id) ON DELETE CASCADE
            );
        `;
        console.log("Table items_table created");

    } catch (error) {
        console.error("Error creating tables:", error);
    } finally {
        await sql.end();
    }
}

createTables();
