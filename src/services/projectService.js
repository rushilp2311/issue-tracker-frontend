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

export async function getAssignedProjects(memberId) {
  const result = await http.get(`${apiEndpoint}/getassignedproject`, {
    headers: {
      member_id: memberId,
    },
  });
  return result;
}

export async function updateProject(project) {
  await http.post(`${apiEndpoint}/updateproject`, project);
}

export default {
  addProject,
};
