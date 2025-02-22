import { fastify } from 'fastify';
import { DatabaseMemory } from './repository/database-memory.js';
import { DatabasePostgres } from './repository/database-postgres.js';
import { NoteModel } from './model/noteModel.js';
import { noteRoutes } from './controller/noteController.js';

export const server = fastify();

// const database = new DatabaseMemory();
const database = new DatabasePostgres();

server.get('/', async (request, reply) => {
    return { hello: 'NAO ERA PROCE ESTAR AQUI KKKKKKKKKKKKKKK' };
});

server.register(noteRoutes, { prefix: '/note' });

server.listen({
    port: 3333,
});