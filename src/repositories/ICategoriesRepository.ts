import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO'
import { Category } from '../entities/Category'

export interface ICategoriesRepository {
  create({ description, name }: ICreateCategoryDTO): void
  findAll(): Category[]
  findByName(name: string): Category | null
}
