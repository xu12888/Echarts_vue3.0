import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// todo 注入ui组件库
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { store, key } from "./store";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// createApp(App).mount("#app");

const app = createApp(App);
app.use(ElementPlus);
app.use(store, key);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount("#app");

