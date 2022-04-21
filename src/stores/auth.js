import { defineStore } from "pinia";
import authApi from "../api/authApi";

export const useAuthStore = defineStore({
  id: "auth",

  state: () => ({
    authStatus: false,
    user: null,
  }),

  action: {
    login(data) {
      authApi
        .login(data)
        .then((res) => {
          this.authStatus = true;
          user = res.data.data;
        })
        .catch((err) => {
          this.authStatus = false;
          user = null;
        });
    },
  },
});
