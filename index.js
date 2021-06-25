import express from 'express';
import morgan from 'morgan';

import router from './routes/index.js';

const app = express();

app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router());

export default app;
