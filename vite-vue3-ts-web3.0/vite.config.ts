import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { loadEnv } from "vite";
import path from "vite";

export default ({ command, mode }) => {
  return defineConfig({
    plugins: [vue()],
    server: {
      host: "127.0.0.1",
      port: Number(loadEnv(mode, process.cwd()).VITE_APP_PORT), // todo端口号配置在.env文件中
      strictPort: true, // ? 端口被占用直接退出
      https: false, // ? 默认用http
      open: true, // todo在开发服务器启动时自动在浏览器中打开应用程序
      proxy: {
        //代理配置
        api: {
          target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL, // todo端口号配置在.env文件中
          changeOrigin: true, // !跨域配置
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
      hmr: {
        overlay: false, // ?屏蔽服务器报错
      },
    },
    resolve: {
      // todo导入项目的路径
      alias: {
        // '@':path.resolve(__dirname,'./src')    报错等待处理
      },
    },
    build: {
      // todo分块打包配置
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
  });
};

