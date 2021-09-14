import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';

import connect from './db/mongoose';
import userRouter from './routes/user';

dotenv.config();

connect();
const app = express();
const port = process.env.PORT || 8080; // default port to listen

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(userRouter);

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Currently, the only route defined is `/users`');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
