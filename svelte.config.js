import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "svelte/preprocess"

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
  },
}
