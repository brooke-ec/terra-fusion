import { nodePolyfills } from "vite-plugin-node-polyfills";
import { sveltekit } from "@sveltejs/kit/vite";
import { imagetools } from "vite-imagetools";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [sveltekit(), imagetools(), nodePolyfills({ globals: { global: true } })],
});
