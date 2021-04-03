import http from './httpService';

const apiEndpoint = '/utils';

export async function getAllUtils() {
  const result = await http.get(`${apiEndpoint}/getallutils`);
  return result.data;
}

export default {
  getAllUtils,
};
