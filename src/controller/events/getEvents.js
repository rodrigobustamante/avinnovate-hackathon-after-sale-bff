import httpStatus, { INTERNAL_SERVER_ERROR } from 'http-status';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const backendUrl = process.env.BACKEND_SERVICE_URL;

export const getEvents = async (req, res) => {
  try {
    const response = await axios.get(`${backendUrl}/events`);

    res.status(200).send({
      message: 'Events sended!',
      data: response.data,
    });
  } catch (error) {
    const {
      status = INTERNAL_SERVER_ERROR,
      message = httpStatus[INTERNAL_SERVER_ERROR],
    } = error;

    res.status(status).send({ message });
  }
};
