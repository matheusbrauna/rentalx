import { createReadStream } from 'fs'
import { parse } from 'csv-parse'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import { unlink } from 'fs/promises'

interface IImportCategory {
  name: string
  description: string
}

export class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = []
      const stream = createReadStream(file.path)

      const parseFile = parse()

      stream.pipe(parseFile)

      parseFile
        .on('data', async (line) => {
          const [name, description] = line

          categories.push({
            name,
            description,
          })
        })
        .on('end', () => {
          unlink(file.path)
          resolve(categories)
        })
        .on('error', (err) => {
          reject(err)
        })
    })
  }

  async execute(file: Express.Multer.File | undefined): Promise<void> {
    if (!file) {
      throw new Error('Invalid file or any file received!')
    }

    const categories = await this.loadCategories(file)

    categories.map((category) => {
      const { name, description } = category

      const categoryAlreadyExists = this.categoriesRepository.findByName(name)

      if (!categoryAlreadyExists) {
        this.categoriesRepository.create({
          name,
          description,
        })
      }
    })
  }
}
