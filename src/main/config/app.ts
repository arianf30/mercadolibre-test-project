import express from 'express'
import { config as dotenv } from 'dotenv'
import middlewares from './middlewares'
import routes from './routes'

const app = express()
// Middlewares Init
middlewares(app)
// Routes Init
routes(app)
dotenv()

export default app
