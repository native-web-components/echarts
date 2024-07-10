import { defineConfig, loadEnv, ConfigEnv } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig(async (params: ConfigEnv) => {
  const { command, mode } = params;
  const ENV = loadEnv(mode, process.cwd());
  console.log("node version", process.version);
  console.info(
    `running mode: ${mode}, command: ${command}, ENV: ${JSON.stringify(ENV)}`
  );
  return {
    base: "./",
    resolve: {
      alias: {
        "echarts": resolve(__dirname, "./node_modules/echarts"),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "WebComponent",
        fileName: (format: string) => `echarts.${format}.js`,
        // formats: ["es", "umd"],
      },
      emptyOutDir: true,
      sourcemap: mode === "development",
      minify: mode !== "development",
      rollupOptions: {
        // 配置将 ECharts 作为外部依赖
        external: ['echarts'],
        output: {
          // 将 ECharts 作为全局变量引入
          globals: {
            "echarts": 'echarts'
          }
        }
      }
    },
    plugins: [dts({ rollupTypes: true })],
  };
});
