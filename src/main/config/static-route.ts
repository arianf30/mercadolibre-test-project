import express, { Express } from 'express'

export default (app: Express): void => {
  app.use(express.static('./src/public'))
}
