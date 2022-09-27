export interface ErrorClient {
  statusCode: number
  body: {
    error: string
    message: string
  }
}

export interface Error {
  name: string
  stack: any
}
