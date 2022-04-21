<template>
  <main class="container mt-5">
    <div class="card col-6 mx-auto">
      <div class="card-header">
        <h5>Register Form</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="register">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input
              v-model="user.name"
              type="text"
              class="form-control"
              autofocus
            />
          </div>
          <div class="form-group">
            <label class="form-label">E-Mail</label>
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <label class="form-label">Re-Password</label>
            <input
              v-model="user.password_confirmation"
              type="password"
              class="form-control"
            />
          </div>

          <button class="btn btn-primary my-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

import authApi from '../../api/authApi';
//import axiosClient from "../../api/axiosClient";

const router = useRouter();

const user = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
});

const reset_form = () => {
  user.name = '';
  user.email = '';
  user.password = '';
  user.password_confirmation = '';
};

const register = async () => {
  // await axiosClient.get("/sanctum/csrf-cookie");
  // await axiosClient.post("/register", user);
  await authApi.register(user);
  reset_form();
  router.push({
    name: 'Login',
  });
};
</script>
