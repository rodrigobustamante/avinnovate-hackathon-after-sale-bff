import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { sendNotification } from './controller';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.post('/send-notification', sendNotification);
