import {createApp} from "vue";
import App from "./App.vue";
import router from "./router/routerfile";

import "./assets/main.css";

const app = createApp(App);
app.use(router);
// mount vue js app inside the #app htmlElement, creation of a vueJS instance that will be able to connect and display data
app.mount("#app");
