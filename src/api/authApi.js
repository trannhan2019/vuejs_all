import axiosClient from "./axiosClient";

const csrf_url = "/sanctum/csrf-cookie";
const authApi = {
  // register(data) {
  //   const url = "/register";
  //   return axiosClient.get(csrf_url).then(() => {
  //     return axiosClient.post(url, data);
  //   });
  // },

  async register(data) {
    const url = "/register";
    await axiosClient.get(csrf_url);
    await axiosClient.post(url, data);
  },

  login(data) {
    const url = "/login";
    return axiosClient.get(csrf_url).then(() => {
      return axiosClient.post(url, data);
    });
  },

  async logout() {
    const url = "/logout";
    await axiosClient.post(url);
  },
};

export default authApi;
