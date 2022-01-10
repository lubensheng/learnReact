import axios from 'axios';
import {
  loginType,
  userInfo
} from '../types/index'
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
});

export const login = (params: loginType): Promise<userInfo> => {
  return instance.post('/api/userService/getUserInfo', params);
}