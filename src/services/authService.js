import jwtDecode from 'jwt-decode';
import http from './httpService';

const apiEndpoint = '/auth';
const tokenKey = 'token';

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export default {
  login,
};
