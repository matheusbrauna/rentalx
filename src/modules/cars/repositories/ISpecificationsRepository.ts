import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO'
import { Specification } from '../entities/Specification'

export interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationDTO): void
  findByName(name: string): Specification | null
}
