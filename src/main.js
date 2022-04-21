import { createApp } from "vue";
import { createPinia } from "pinia";
//import axios from "axios";
//import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import router from "./router";

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:8000/";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
//import Bootstrap js
import "bootstrap/dist/js/bootstrap.js";
