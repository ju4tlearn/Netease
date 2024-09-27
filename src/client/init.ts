import { createApp, type App as VueAPP } from "vue";
import { createPinia } from "pinia";
import router from "@/router";
import App from "@/App.vue";
import { OpenAPI } from "./api/core/OpenAPI";

const installVuePlugins = (app: VueAPP) => {
  app.use(createPinia());
  app.use(router);
};

export const init = () => {
  const app = createApp(App);
  installVuePlugins(app);
  app.mount("#app");

  // 从 .env 中读取 VITE_API_URL
  OpenAPI.BASE = "https://wangyiyun-teal.vercel.app";

  // 通常这个无需配置, 因提供的第三方网易云 API 服务端已帮我们处理.
  // 详细：{网易云 API url}/docs/#/?id=_2-%e9%82%ae%e7%ae%b1%e7%99%bb%e5%bd%95
  // OpenAPI.TOKEN;
};
