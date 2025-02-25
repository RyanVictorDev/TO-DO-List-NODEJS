import { DatabasePostgres } from "../../notes/repository/database-postgres.js";
import { UserModel } from "../model/userModel.js"
import { UserDatabase } from "../repository/user-database.js";

const database = new UserDatabase();

export function userRoutes(server, done){
    server.post('/', async (request, reply) => {
        const user = new UserModel(request.body);
        database.create(user);
        return reply.status(201).send(request.body);
    });

    server.get('/', async () => {
        const users = database.list();
        return reply.status(200).send(users);
    });

    // server
}