import { fastify } from 'fastify';
import { DatabaseMemory } from './dbConfig/database-memory.js';
import { DatabasePostgres } from './notes/repository/database-postgres.js';
import { NoteModel } from './notes/model/noteModel.js';
import { noteRoutes } from './notes/controller/noteController.js';
import { userRoutes } from './users/controller/userController.js';
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
server.register(userRoutes, { prefix: '/user' });

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
