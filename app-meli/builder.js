const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['./src/client/_app.tsx'],
  bundle: true,
  watch: true,
  outdir: 'src/public/dist',
  plugins: [],
  loader: { '.png': 'binary' }
}).catch(() => process.exit(1))
