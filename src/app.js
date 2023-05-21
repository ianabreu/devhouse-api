import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import 'dotenv/config';

import routes from './routes';


class App{

    constructor(){
        this.server = express();

        mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@devhouse.7f1gkqm.mongodb.net/devhouse?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express.json());
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
    }
    routes() {
        this.server.use(routes);
    }
}

export default new App().server;