import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connect from './db/mongoose';
import userRouter from './routes/user';

dotenv.config();

connect();
const app = express();
const port = 8080; // default port to listen

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(userRouter);

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
