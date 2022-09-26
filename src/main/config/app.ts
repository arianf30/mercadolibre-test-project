import express from 'express'
import { config as dotenv } from 'dotenv'
import staticRoute from './static-route'
import middlewares from './middlewares'
import routes from './routes'

const app = express()
// Public folder
staticRoute(app)
// Middlewares Init
middlewares(app)
// Routes Init
routes(app)
dotenv()

export default app
