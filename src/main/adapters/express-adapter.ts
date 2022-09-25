import { Request, Response } from 'express'
import { Controller } from '../interfaces/controller'
import { HttpRequest } from '../interfaces/http-interface'

export const AdapterRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.query
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
