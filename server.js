import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

const database = new DatabaseMemory();

server.get('/', async (request, reply) => {
    return { hello: 'NAO ERA PROCE ESTAR AQUI KKKKKKKKKKKKKKK' };
}),

server.post('/teste', async (request, reply) => {
    const { title, description, isDone } = request.body;

    database.create({
        title,
        description,
        isDone
    });

    return reply.status(201).send(request.body);
}),

server.get('/teste', async () => {
    const items = database.list();

    return items;
}),

server.put('/teste/:id', async (request, reply) => {
    const itemId = request.params.id;

    const { title, description, isDone } = request.body;

    database.update(itemId, {
        title,
        description,
        isDone
    });

    reply.status(204).send();
}),

server.delete('/teste/:id', async (request, reply) => {
    const itemId = request.params.id;

    database.delete(itemId);

    reply.status(204).send();
}),

server.listen({
    port: 3333,
});