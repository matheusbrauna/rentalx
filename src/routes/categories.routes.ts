import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository'
import { CreateCategoryUseCase } from '../modules/cars/useCases/CreateCategoryUseCase'

export const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)

  createCategoryUseCase.execute({ name, description })

  return res.status(201).send()
})

categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.findAll()

  return res.status(200).json(categories)
})
