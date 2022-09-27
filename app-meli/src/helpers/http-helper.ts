import { ClientError } from '../errors/client-error'
import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../main/interfaces/http-interface'

export const success = (data: any): HttpResponse => {
  return {
    statusCode: 200,
    body: data
  }
}

export const clientError = (error: any): HttpResponse => {
  const errorMsg: string = error?.message ?? ''
  return ClientError(errorMsg)
}

export const serverError = (error: any): HttpResponse => {
  return {
    statusCode: 500,
    body: ServerError(error.stack)
  }
}
