// import terser from "@rollup/plugin-terser";
// import resolve from '@rollup/plugin-node-resolve';

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "es",
    },
  ],
  // plugins: [resolve()]
};
