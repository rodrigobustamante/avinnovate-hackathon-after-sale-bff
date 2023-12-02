import express from 'express';
import dotenv from 'dotenv';
import { sendNotification } from './controller';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.post('/notifications', sendNotification);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
