import { CrudService } from "@/services/api/crud-service";

class SaucesService extends CrudService {
  constructor() {
    super("/api/sauces");
  }

  getSauces() {
    return this.get();
  }
}

export const saucesService = new SaucesService();
