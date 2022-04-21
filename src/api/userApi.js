import axiosClient from './axiosClient';

const userApi = {
  getUser() {
    const url = '/api/user';
    return axiosClient.get(url);
  },
};

export default userApi;
