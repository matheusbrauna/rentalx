import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO'
import { Category } from '../../entities/Category'
import { ICategoriesRepository } from '../ICategoriesRepository'

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]

  constructor() {
    this.categories = []
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    })

    this.categories.push(category)
  }

  findAll(): Category[] {
    return this.categories
  }

  findByName(name: string): Category | null {
    const category = this.categories.find((category) => category.name === name)

    if (category) {
      return category
    }

    return null
  }
}
