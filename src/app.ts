import express, { Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import { router } from './routes'
import swaggerFile from './swagger.json'

import 'dotenv/config'

export const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err}`,
  })
})
