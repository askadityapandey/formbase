import { defineConfig } from "tsup";

export default defineConfig((opts) => ({
  entry: ["./src/index.ts"],
  format: ["esm"],
  splitting: true,
  sourcemap: true,
  minify: !opts.watch,
  clean: !opts.watch,
  experimentalDts: true,
  outDir: "dist",
}));
