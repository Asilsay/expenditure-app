import axios from 'axios';

const instance = axios.create({
  baseURL: `https://script.google.com/macros/s/AKfycbxpdPa_xHTvYXt6HNlvauyE_BSsaqoVHmdlUkZJRKiqXvtEBAXkMDLg3BZS06SLzNgx/exec`,
});

export default {
  PostTask: (data?: FormData, params?: string) =>
    instance({
      method: 'POST',
      url: '',
      data: data,
      params: {
        inp: params,
      },
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      // },
    }),
};
