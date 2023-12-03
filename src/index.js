import express from 'express';
import dotenv from 'dotenv';
import { sendNotification, getEvents } from './controller';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.post('/notifications', sendNotification);
app.get('/events', getEvents);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use('*', (_, res) => {
  return res.status(404).json({
    message: 'API route not found',
  });
});
