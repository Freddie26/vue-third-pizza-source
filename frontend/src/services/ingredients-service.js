import { CrudService } from "@/services/api/crud-service";

class IngredientsService extends CrudService {
  constructor() {
    super("/api/ingredients");
  }

  getIngredients() {
    return this.get();
  }
}

export const ingredientsService = new IngredientsService();
