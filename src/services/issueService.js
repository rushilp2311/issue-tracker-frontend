/* eslint-disable camelcase */
import http from './httpService';

const apiEndpoint = '/issues';

export async function addIssue(issue) {
  const result = await http.post(`${apiEndpoint}/addissue`, issue);
  return result.data;
}

export async function getAllIssues(project_id) {
  const result = await http.get(`${apiEndpoint}/getallissues`, {
    headers: {
      project_id: project_id,
    },
  });
  return result.data;
}

export default {
  addIssue,
};
