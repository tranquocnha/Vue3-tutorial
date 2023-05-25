import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/styles/tailwind.css";
import { registerGlobalComponents } from "./utils/import";

let app;
app = createApp(App);
registerGlobalComponents(app);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount("#app");
