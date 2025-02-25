import { DatabasePostgres } from "../repository/database-postgres.js";
import { NoteModel } from "../model/noteModel.js";

const database = new DatabasePostgres();

export function noteRoutes(server, options, done) {
    server.post('/', async (request, reply) => {
        const note = new NoteModel(request.body);
        database.create(note);
        return reply.status(201).send(request.body);
    });

    server.get('/user/:id', async (request) => {
        const items = database.list(request.params.id);
        return items;
    });

    server.put('/:id', async (request, reply) => {
        const itemId = request.params.id;
        const noteUpdate = new NoteModel(request.body);
        database.update(itemId, noteUpdate);
        reply.status(204).send();
    });

    server.put('/finish/:id', async (request, reply) => {
        const itemId = request.params.id;
        database.updateStatus(itemId);
        reply.status(204).send();
    });

    server.delete('/:id', async (request, reply) => {
        const itemId = request.params.id;
        database.delete(itemId);
        reply.status(204).send();
    });

    done();
}
