import { Error } from '../main/interfaces/error'

export const ServerError = (stack: any): Error => {
  return {
    name: 'Error internal the server',
    stack
  }
}
