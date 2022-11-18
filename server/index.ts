import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import birdRoute from './routes/birdRoute';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/api", birdRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Magic happens in port 3000');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});