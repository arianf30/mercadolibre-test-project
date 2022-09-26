const chokidar = require('chokidar')
const builder = require('esbuild')

const config = {
  entryPoints: ['./src/client/_app.tsx'],
  bundle: true,
  minify: false,
  sourcemap: true,
  splitting: true,
  format: 'esm',
  watch: true,
  target: ['es2020', 'chrome58', 'node12'],
  outdir: './src/public/dist'
}

builder.build(config)

chokidar.watch('.', { ignored: /public|node_modules/ }).on('change', async (even, path) => {
  await builder.build(config)
})
