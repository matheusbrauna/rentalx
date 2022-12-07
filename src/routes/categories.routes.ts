import { Router } from 'express'
import multer from 'multer'
import { createCategoryFactory } from '../modules/cars/useCases/createCategory/CreateCategoryFactory'
import { listCategoriesFactory } from '../modules/cars/useCases/listCategories/ListCategoriesFactory'

export const categoriesRoutes = Router()

const upload = multer({
  dest: './tmp',
})

categoriesRoutes.post('/', (req, res) => createCategoryFactory().handle(req, res))

categoriesRoutes.get('/', (req, res) => listCategoriesFactory().handle(req, res))

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
  const { file } = req

  console.log(file)

  return res.send()
})
