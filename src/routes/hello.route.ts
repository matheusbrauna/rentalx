import { Router } from 'express'

export const helloRoute = Router()

helloRoute.get('/', (req, res) => {
  return res.send('Hello World')
})
