import { Category } from "@modules/cars/infra/typeorm/entities/Category";

// DTO => Data transfer object. Utilizado para pegar os valores da rota e enviar para os repositórios
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
