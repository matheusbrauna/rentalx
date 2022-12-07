import { Router } from 'express'
import { createCategoryFactory } from '../modules/cars/useCases/createCategory/CreateCategoryFactory'
import { listCategoriesFactory } from '../modules/cars/useCases/listCategories/ListCategoriesFactory'

export const categoriesRoutes = Router()

categoriesRoutes.post('/', (req, res) => createCategoryFactory().handle(req, res))

categoriesRoutes.get('/', (req, res) => listCategoriesFactory().handle(req, res))
