import { ErrorClient } from '../main/interfaces/error'

export const ClientError = (error: any): ErrorClient => {
  switch (error) {
    case 'Request failed with status code 404':
      return {
        statusCode: 404,
        body: {
          error: 'resource not found',
          message: 'Si quieres conocer los recursos de la API que se encuentran disponibles visita el Sitio de Desarrolladores de MercadoLibre (http://developers.mercadolibre.com)'
        }
      }
    default:
      return {
        statusCode: 404,
        body: {
          error: 'Error no identificado',
          message: 'Existe un error en tu solicitud.'
        }
      }
  }
}
