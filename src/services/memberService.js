import http from './httpService';

const apiEndpoint = '/member';

export async function getAllMembers(company) {
  const result = await http.get(`${apiEndpoint}/allmembers`, {
    headers: {
      company_id: company,
    },
  });
  return result;
}

export default {
  getAllMembers,
};
