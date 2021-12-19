import { Category } from "../model/Category";

// DTO => Data transfer object. Utilizado para pegar os valores da rota e enviar para os repositórios
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRespository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRespository, ICreateCategoryDTO };
