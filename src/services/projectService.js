import http from './httpService';

const apiEndpoint = '/project';

export async function addProject(project) {
  return http.post(`${apiEndpoint}`, project);
}

export async function getAllProjectDetails(company) {
  const result = await http.get(`${apiEndpoint}`, {
    headers: {
      company_id: company,
    },
  });
  return result;
}

export default {
  addProject,
};
