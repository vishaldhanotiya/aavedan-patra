export default {
  outDir: ".open-next",

  // App directory for Next.js (yours is in src/)
  appDirectory: "src/app",

  // Cloudflare requires Edge runtime for dynamic routes
  default: {
    runtime: "edge",
  },

  // Optional — makes worker smaller (helps with 3MB limit)
  minify: true,
};
