import { randomUUID } from 'node:crypto';

export class DatabaseMemory {
    #items = new Map();

    list() {
        return Array.from(this.#items.entries()).map(([id, data]) => ({
            id,
            ...data
        }));
    }
    

    create(item){   
        const id = randomUUID();
        
        this.#items.set(id, item);
    }

    update(id, item){
        this.#items.set(id, item);
    }

    delete(id){
        this.#items.delete(id);
    }
}