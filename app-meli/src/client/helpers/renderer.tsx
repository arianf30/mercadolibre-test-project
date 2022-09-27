import * as React from 'react'
import { Request } from 'express'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { StaticRouter } from 'react-router-dom'
import checkUserAgent from './checkUserAgent'
import Router from '../router/Router'
import { SsProps } from '../interfaces/server-side-props'

export default (req: Request, ssProps: SsProps): string => {
  const userAgent: string = req?.headers['user-agent'] ?? navigator.userAgent
  const isBot: boolean = checkUserAgent(userAgent)
  const content = renderToString(
    <div>
      <StaticRouter location={req.path}>
        <Router ssProps={ssProps} isBot={isBot} />
      </StaticRouter>
    </div>
  )
  const initialData = JSON.stringify({ ...ssProps, isBot }).replace(/</g, '\\u003c')
  const helmet = Helmet.renderStatic()

  const title: string = helmet.title.toString()
  const meta: string = helmet.meta.toString()
  const link: string = helmet.link.toString()

  return `<!DOCTYPE html>
<html lang="es-AR">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${title}
  ${meta}
  ${link}
  <link rel="stylesheet" href="/dist/_app.css" />
</head>

<body>
  <div id="root">${content}</div>
  <script>
    window.__INITIAL_DATA__ = ${initialData}
  </script>
  <script src="/dist/_app.js"></script>
</body>

</html>`
}
