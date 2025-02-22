import { randomUUID } from 'node:crypto';
import { sql } from './db.js';

export class DatabasePostgres {
    #items = new Map();

    async list() {
        const items = await sql`
            SELECT * FROM items;
        `;

        return items;
    }
    
    async create(item){   
        await sql`
            INSERT INTO items (title, description, finished)
            VALUES (${item.title}, ${item.description}, false)`;
    }

    async update(id, item){
        await sql`
            UPDATE items
            SET title = ${item.title}, description = ${item.description}, finished = ${item.isDone}
            WHERE id = ${id}`;
    }

    async updateStatus(id){
        await sql`
            UPDATE items
            SET finished = true
            WHERE id = ${id}`;
    }

    async delete(id){
        await sql`
            DELETE FROM items
            WHERE id = ${id}`;
    }
}