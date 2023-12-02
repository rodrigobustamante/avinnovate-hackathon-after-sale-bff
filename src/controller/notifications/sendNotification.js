import httpStatus, { INTERNAL_SERVER_ERROR } from 'http-status';

export const sendNotification = async (req, res) => {
  try {
    res.status(200).send({
      message: 'Notification sended!',
    });
  } catch (error) {
    const {
      status = INTERNAL_SERVER_ERROR,
      message = httpStatus[INTERNAL_SERVER_ERROR],
    } = error;

    res.status(status).send({ message });
  }
};
