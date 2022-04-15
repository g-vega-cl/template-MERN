import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import indexRouter from './routes/index/index.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log('Server running')))
  .catch((e) => console.log(e.message));

export default app;
