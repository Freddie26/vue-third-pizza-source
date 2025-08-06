import { CrudService } from "./api/crud-service";

export class DoughsService extends CrudService {
  constructor() {
    super("/api/dough");
  }

  getDoughs() {
    return this.get();
  }
}
