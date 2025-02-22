import { fastify } from 'fastify';
import { DatabaseMemory } from './repository/database-memory.js';
import { DatabasePostgres } from './repository/database-postgres.js';
import { NoteModel } from './model/noteModel.js';
import { noteRoutes } from './controller/noteController.js';
import cors from '@fastify/cors'

export const server = fastify();

// const database = new DatabaseMemory();
const database = new DatabasePostgres();
const port = process.env.PORT || 3333

server.register(cors, { 
    origin: '*'
});

server.get('/', async (request, reply) => {
    return { hello: 'NAO ERA PROCE ESTAR AQUI KKKKKKKKKKKKKKK' };
});

server.register(noteRoutes, { prefix: '/note' });

const address = '0.0.0.0';
server.listen({
    port: port,
    host: address
}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
