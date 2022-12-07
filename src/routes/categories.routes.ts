import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository'
import { createCategoryFactory } from '../modules/cars/useCases/createCategory/CreateCategoryFactory'

export const categoriesRoutes = Router()

const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (req, res) => createCategoryFactory().handle(req, res))

categoriesRoutes.get('/', (req, res) => {
  const categories = categoriesRepository.findAll()

  return res.status(200).json(categories)
})
