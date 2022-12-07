import { ICreateSpecificationDTO } from '../../dtos/ICreateSpecificationDTO'
import { Specification } from '../../entities/Specification'
import { ISpecificationsRepository } from '../ISpecificationsRepository'

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  private static INSTANCE: SpecificationsRepository

  private constructor() {
    this.specifications = []
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository()
    }

    return SpecificationsRepository.INSTANCE
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      description,
      name,
      created_at: new Date(),
    })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification | null {
    const specification = this.specifications.find((specification) => specification.name === name)

    if (specification) {
      return specification
    }

    return null
  }
}
