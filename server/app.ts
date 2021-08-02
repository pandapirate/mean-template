import * as express from 'express';
import * as mongoose from 'mongoose';
import * as path from 'path';

import { Express } from 'express';
import {todoRouter} from './routes/todo';

export default function createApp(): Express {
    const app = express();
    const clientDir = path.join(__dirname, '../public');
    app.use(express.static(clientDir));
    app.use(todoRouter);

    mongoose.connect('mongodb://localhost:27017/finance', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, () => {
      console.log('Connected to MongoDB');
    });

    return app;
}
