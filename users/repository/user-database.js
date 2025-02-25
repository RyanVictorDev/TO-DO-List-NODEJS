import { randomUUID } from 'node:crypto';
import { sql } from '../../dbConfig/db.js';

export class UserDatabase {
    #items = new Map();

    async list() {
        const users = await sql`
            SELECT * FROM items_table;
        `;

        return users;
    }
    
    async create(user){   
        await sql`
            INSERT INTO users_table (name, email, password)
            VALUES (${user.name}, ${user.email}, ${user.password})
        `;
    }

    async update(id, user){
        await sql`
            UPDATE users_table
            SET name = ${user.name}, email = ${user.email}
            WHERE id = ${id}`;
    }

    async delete(id){
        await sql`
            DELETE FROM users_table
            WHERE id = ${id}`;
    }
}