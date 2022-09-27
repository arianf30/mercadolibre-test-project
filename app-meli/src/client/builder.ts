/* eslint-disable @typescript-eslint/no-var-requires */
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

builder.build(config).then(() => console.log('⚡ Fast Build ⚡'))

chokidar.watch('.', { ignored: /public|node_modules/ }).on('change', async () => {
  await builder.build(config)
})
