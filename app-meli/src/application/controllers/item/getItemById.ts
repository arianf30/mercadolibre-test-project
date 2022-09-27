import { HttpRequest, HttpResponse } from '../../../main/interfaces/http-interface'
import { Controller } from '../../../main/interfaces/controller'
import { clientError, success } from '../../../helpers/http-helper'
// Domain
import { GetItemById } from '../../../domain/useCases/item/getItemById'

export const getItemByIdController = (getItemById: GetItemById): Controller => {
  return {
    handle: async (httpRequest: HttpRequest): Promise<HttpResponse> => {
      try {
        const { id } = httpRequest.params
        const data = await getItemById.getItem(id)
        return success(data)
      } catch (error) {
        return clientError(error)
      }
    }
  }
}
