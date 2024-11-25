import { ICategory } from './category.interface';

class CategoryService {
  private categories: { [id: string]: ICategory } = {};

  async getCategory(categoryId: string): Promise<ICategory> {
    if (!this.categories[categoryId]) {
      const response = await fetch(
        `https://api.example.com/categories/${categoryId}`
      );
      const category = await response.json();
      this.categories[categoryId] = {
        id: category.id,
        name: category.name,
        description: category.description,
      };
    }
    return this.categories[categoryId];
  }
}

const categoryService = new CategoryService();

export default categoryService;
