import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { ImportCategoryController } from './ImportCategoryController'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

export const importCategoryFactory = () => {
  const categoriesRepository = CategoriesRepository.getInstance()
  const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
  const importCategoryController = new ImportCategoryController(importCategoryUseCase)

  return importCategoryController
}
