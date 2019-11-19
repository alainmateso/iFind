import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/index';
import posts from './routes/posts';

const version = 'v1';

const app = express();
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/posts', posts);

app.use(`/api/${version}`, router);


export default app;
