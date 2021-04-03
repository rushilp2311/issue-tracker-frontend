import http from './httpService';

const apiEndpoint = '/issues';

export async function addIssue(issue) {
  http.post(`${apiEndpoint}/addissue`, issue);
}

export default {
  addIssue,
};
