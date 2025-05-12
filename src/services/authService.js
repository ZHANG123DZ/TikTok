import httpRequest from '../utils/httpRequest';

export const getCurrentUser = async () => {
  const res = await httpRequest.get('/auth/me');
  return res;
};

export const getProfile = async (userName) => {
  const res = await httpRequest.get(`/users/${userName}`);
  return res;
};

export const login = async (loginInfo) => {
  const res = await httpRequest.post('/auth/login', loginInfo);
  try {
    httpRequest.setToken(res.data.access_token, res.data.refresh_token);
  } catch (err) {
    console.log(err);
  }
  return res;
};

export const register = async (registerInfo) => {
  const res = await httpRequest.post('/auth/register', registerInfo);
  httpRequest.setToken(res.data.access_token, res.data.refresh_token);
  return res;
};

export const checkEmail = async (email) => {
  const res = await httpRequest.get('/auth/check-email', {
    params: { email },
  });
  return res?.exists ?? false;
};

export const logout = async () => {
  const res = await httpRequest.post('/auth/logout');
  httpRequest.setToken(null, null);
  return res;
};

export default {
  getCurrentUser,
  login,
  register,
  checkEmail,
  getProfile,
};
