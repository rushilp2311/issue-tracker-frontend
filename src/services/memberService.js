import http from './httpService';

const apiEndpoint = '/member';

export async function getAllMembers() {
  const result = await http.get(`${apiEndpoint}/allmembers`);
  return result;
}

export default {
  getAllMembers,
};
