import { Router } from 'express'
import { createSpecificationFactory } from '../modules/cars/useCases/createSpecification/CreateSpeficicationFactory'

export const specificationRoutes = Router()

specificationRoutes.post('/', (req, res) => createSpecificationFactory().handle(req, res))
