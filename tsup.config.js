import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["./node_modules/vue/index.js"],
    treeshake: true,
    minify: true,
    verbose: true,
    dts: true,
    external: ["vue"],
    clean: true,
    outDir: "./build-sandpack/vue",
  },
]);