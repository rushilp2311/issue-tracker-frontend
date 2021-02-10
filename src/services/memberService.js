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

export async function registerMember(member) {
  const result = await http.post(`${apiEndpoint}/registermember`, member);
  return result;
}

export default {
  getAllMembers,
};
