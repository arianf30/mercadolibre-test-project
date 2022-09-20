import { Router } from 'express'

export default (router: Router): void => {
  router.get('/items', (req, res) => {
    res.status(200).json({
      ok: true,
      message: 'Ruta activa'
    })
  })
}
