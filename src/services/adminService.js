import http from './httpService';

const apiEndpoint = '/admin';

export async function registerAdmin(admin) {
  return http.post(apiEndpoint, { ...admin, is_admin: true });
}

export default { registerAdmin };
