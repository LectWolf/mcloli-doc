import { defineConfig } from "vitepress";
import { shared } from "./shared.js";
import { zh_CN } from "./zh-CN.js";
import { en_US } from "./en-US.js";

export default defineConfig({
  ...shared,
  locales: {
    "zh-CN": { label: "简体中文", ...zh_CN },
    "en-US": { label: "English", ...en_US },
  },
});
