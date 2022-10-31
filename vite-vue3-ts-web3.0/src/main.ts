import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { store, key } from "./store";

// createApp(App).mount("#app");

const app = createApp(App);
app.use(store, key);
app.mount('#app')
