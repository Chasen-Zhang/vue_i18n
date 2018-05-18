import axios from 'axios'
import env_my from '../../config_dev_pro';
// axios 配置
axios.defaults.timeout = 5000;


// http request 拦截器
axios.interceptors.request.use(
  config => {
    console.log(config,'from index.js config hahha');
    return config;
  });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    console.log(response,'from index.js response');
    return response;
  },
  err=> {
    if (err.response.status == 504||err.response.status == 404) {
     console.log('服务器被吃了⊙﹏⊙∥');
    } else if (err.response.status == 403) {
      console.log('权限不足,请联系管理员!');
    }
    return Promise.resolve(err);
  });

let base = env_my.base;

export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params
  });
};
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: `${base}${url}`
  });
};
