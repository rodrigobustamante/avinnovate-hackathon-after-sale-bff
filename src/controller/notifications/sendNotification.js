import httpStatus, { INTERNAL_SERVER_ERROR } from 'http-status';
import { createNotication } from '../../services';

export const sendNotification = async (req, res) => {
  try {
    const response = await createNotication();

    // const { data } = await axios.post(
    //   'https://onesignal.com/api/v1/notifications',
    //   {
    //     included_segments: ['Subscribed Users'],
    //     app_id: process.env.ONESIGNAL_APP_ID,
    //     contents: {
    //       en: 'This is a message, sent from postman using the onesignal API',
    //     },
    //     headings: {
    //       en: 'This is a heading',
    //     },
    //     subtitle: {
    //       en: 'This is a subtitle, it should only appear on iOS devices',
    //     },
    //     ios_badgeType: 'SetTo',
    //     ios_badgeCount: 1,
    //     priority: 10,
    //   },
    //   {
    //     headers,
    //   }
    // );

    // if (data?.errors?.length) {
    //   return res.status(400).send({ message: 'Error', errors: data?.errors });
    // }

    if (response?.errors) {
      return res.status(400).send({ message: 'Error sended the notification', errors: response?.errors });
    }

    return res.status(200).send({ message: 'Notifications sended', response });

    //   const { oneSignalPlayerId, name, title } = req.body;

    //   console.log(process.env.ONESIGNAL_APP_ID);

    //   const configuration = OneSignal.createConfiguration({
    //     authMethods: {
    //         user_key: {
    //           tokenProvider: user_key_provider
    //       },
    //         app_key: {
    //           tokenProvider: app_key_provider
    //         }
    //     }
    // });

    //   const onesignal = new OneSignal.Client(
    //     process.env.ONESIGNAL_APP_ID,
    //     process.env.ONESIGNAL_API_KEY
    //   );

    //   const response = await onesignal.createNotification({
    //     contents: {
    //       es: '¡Te tenemos noticias!',
    //       en: 'We have news!',
    //     },
    //     include_aliases: [oneSignalPlayerId],
    //   });

    // const courier = new CourierClient({
    //   authorizationToken: process.env.COURIER_AUTH_TOKEN,
    // });

    // const { oneSignalPlayerId, name, title } = req.body;

    // // await courier.send({
    // //   message: {
    // //     to: {
    // //       data: {
    // //         name: 'name from body',
    // //       },
    // //       phone_number: 'phone from body',
    // //     },
    // //     content: {
    // //       title: 'title from chatgpt',
    // //       body: 'content from chat gpt',
    // //     },
    // //     routing: {
    // //       method: 'single',
    // //       channels: ['sms'],
    // //     },
    // //   },
    // // });

    // const { requestId } = await courier.send({
    //   message: {
    //     oneSignalPlayerID: oneSignalPlayerId,
    //     to: {
    //       data: {
    //         name,
    //       },
    //     },
    //     content: {
    //       title,
    //       body: '{name}',
    //     },
    //   },
    // });

    res.status(200).send({ message: 'Notifications sended' });
  } catch (error) {
    console.log({ error: error?.response?.data });
    const {
      status = INTERNAL_SERVER_ERROR,
      message = httpStatus[INTERNAL_SERVER_ERROR],
    } = error;

    res.status(status).send({ message });
  }
};
