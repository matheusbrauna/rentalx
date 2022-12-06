import { Router } from 'express'
import { helloRoute } from './hello.route'

export const router = Router()

router.use('/', helloRoute)
