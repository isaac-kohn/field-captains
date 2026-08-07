import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        captains: resolve(__dirname, "captains/index.html"),
        projects: resolve(__dirname, "projects/index.html"),
        nonCircularGearGenerator: resolve(
          __dirname,
          "non-circular-gear-generator/index.html",
        ),
        nonCircularGears: resolve(
          __dirname,
          "projects/non-circular-gears/index.html",
        ),
      },
    },
  },
});
