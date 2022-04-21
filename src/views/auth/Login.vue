<template>
  <main class="container mt-5">
    <div class="card col-6 mx-auto">
      <div class="card-header">
        <h5>Login Form</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="" class="form-label">E-Mail</label>
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              required
              autofocus
            />
          </div>
          <div class="form-group">
            <label for="" class="form-label">Password</label>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
            />
          </div>
          <button class="btn btn-primary my-2" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import authStore from '@/stores/auth';

const user = reactive({
  email: '',
  password: '',
});

const router = useRouter();

const login = async () => {
  await authStore.dispatch('login', user);
  router.replace({
    name: 'Dashboard',
  });
};
</script>
