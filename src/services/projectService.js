import http from './httpService';

const apiEndpoint = '/project';

export async function addProject(project) {
  return http.post(`${apiEndpoint}`, project);
}

export default {
  addProject,
};
