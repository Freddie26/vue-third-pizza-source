import { CrudService } from "./api/crud-service";

export class IngredientsService extends CrudService {
  constructor() {
    super("/api/ingredients");
  }

  getIngredients() {
    return this.get();
  }
}
