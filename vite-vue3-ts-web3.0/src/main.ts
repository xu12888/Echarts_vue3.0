import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// todo 注入ui组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { store, key } from "./store";

// createApp(App).mount("#app");

const app = createApp(App);
app.use(ElementPlus);
app.use(store, key);
app.mount('#app')
