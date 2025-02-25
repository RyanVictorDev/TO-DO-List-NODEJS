import { randomUUID } from 'node:crypto';
import { sql } from '../../dbConfig/db.js';

export class DatabasePostgres {
    #items = new Map();

    async list(userId) {
        const items = await sql`
            SELECT * FROM items_table WHERE user_id = ${userId};
        `;

        return items;
    }
    
    async create(item){   
        await sql`
            INSERT INTO items_table (title, description, finished, user_id)
            VALUES (${item.title}, ${item.description}, false, ${item.userId})`;
    }

    async update(id, item){
        await sql`
            UPDATE items_table
            SET title = ${item.title}, description = ${item.description}
            WHERE id = ${id}`;
    }

    async updateStatus(id){
        await sql`
            UPDATE items_table
            SET finished = true
            WHERE id = ${id}`;
    }

    async delete(id){
        await sql`
            DELETE FROM items_table
            WHERE id = ${id}`;
    }
}