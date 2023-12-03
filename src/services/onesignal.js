import axios from 'axios';
import request from 'request';
const sdk = require('api')('@onesignal/v11.0#4bj1flplftial');

const optionsBuilder = (method, path, body) => {
  return {
    method,
    url: `https://onesignal.com/api/v1/${path}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${process.env.ONESIGNAL_API_KEY}`,
    },
    body: body ? JSON.stringify(body) : null,
  };
};

const options2 = {
  method: 'POST',
  url: 'https://onesignal.com/api/v1/notifications',
  headers: {
    accept: 'application/json',
    Authorization: 'Basic YzdhODE0YTktM2I0NS00YjdhLTkzYmMtOTkxNDM3NjExMjJm',
    'content-type': 'application/json'
  },
  data: {
    included_segments: ['Subscribed Users'],
    contents: {en: 'English or Any Language Message', es: 'Mensaje en español'},
    app_id: 'da278e23-9d1d-4ce2-855a-48887866b4c0'
  }
};

export const createNotication = async (userId) => {
  const body = {
    // app_id: process.env.ONESIGNAL_APP_ID,
    headings: { en: 'Your Notification Title' },
    contents: { en: 'Your Notification Message' },
    // included_segments: ['All']
    app_id: process.env.ONESIGNAL_APP_ID,
    // // included_segments: ['Chile'],
    include_aliases: {onesignal_id: ['7f298d69-f92d-faf6-7c12-6ab2571cbf66']},
    // data: {
    //   foo: 'bar',
    // },
    // contents: {
    //   en: 'Sample Push Message',
    // },
    // app_id: process.env.ONESIGNAL_APP_ID,
    // included_segments: ['Subscribed Users'],
    // data: {
    //   foo: 'bar',
    // },
    // contents: {
    //   en: 'Sample Push Message',
    // },
  };

  const options = optionsBuilder('post', 'notifications', body);

  try {
    // const response = await sdk.createNotification({
    //   included_segments: ['Subscribed Users'],
    //   contents: {
    //     en: 'English or Any Language Message',
    //     es: 'Mensaje en español'
    //   },
    //   app_id: 'da278e23-9d1d-4ce2-855a-48887866b4c0'
    // }, {
    //   authorization: 'Basic YzdhODE0YTktM2I0NS00YjdhLTkzYmMtOTkxNDM3NjExMjJm'
    // });

    const response = await axios.request(options2);
    console.log({response: "asdasdasdasdasdasd"});
    console.log({response});
    // const response = await axios(options);
    // const response = request(options, (error, response) => {
    //   if (error) throw new Error(error);

    //   return response;
    //   // viewNotifcation(JSON.parse(response.body).id);
    // });

    return response.data;
  } catch (error) {
    console.log({error});
    return { errors: error?.response?.data?.errors };
  }
};
