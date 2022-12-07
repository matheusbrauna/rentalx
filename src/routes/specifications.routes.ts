import { Router } from 'express'
import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository'
import { CreateSpecificationUseCase } from '../modules/cars/useCases/createSpecification/CreateSpecificationUseCase'

export const specificationRoutes = Router()

const specificationsRepository = new SpecificationsRepository()

specificationRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)

  createSpecificationUseCase.execute({ name, description })

  return res.status(201).send()
})
