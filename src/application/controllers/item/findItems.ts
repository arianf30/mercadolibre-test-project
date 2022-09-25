import { serverError, success } from '../../../helpers/http-helper'
import { Controller } from '../../../main/interfaces/controller'
import { HttpRequest, HttpResponse } from '../../../main/interfaces/http-interface'
// Domain
import { FindItems } from '../../../domain/useCases/item/findItems'

export const findItemsController = (findItemsData: FindItems): Controller => {
  return {
    handle: async (httpRequest: HttpRequest): Promise<HttpResponse> => {
      try {
        const { query } = httpRequest.query
        const data = await findItemsData.find(query)
        return success(data)
      } catch (error) {
        return serverError(error)
      }
    }
  }
}
