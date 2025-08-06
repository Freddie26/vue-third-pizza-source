import { CrudService } from "./api/crud-service";

export class SaucesService extends CrudService {
  constructor() {
    super("/api/sauces");
  }

  getSauces() {
    return this.get();
  }
}
