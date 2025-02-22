import { sql } from "./db.js";

sql`
    CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    finished BOOLEAN NOT NULL
    );
`.then(() => {
    console.log("Table created");
}
).catch((error) => {
    console.error(error);
}
);