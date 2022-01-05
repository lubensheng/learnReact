import axios from "axios";
import {
  loginType,
  userInfo
} from '../types/index'
// axios.defaults.baseURL = 'http:127.0.0.1:8081';
const instance = axios.create({
  baseURL: 'http:127.0.0.1:8081/api',
  timeout: 1000,
});

export const login = (params: loginType): Promise<userInfo> => {
  return instance.post('/userService/getUserInfo', params);
}