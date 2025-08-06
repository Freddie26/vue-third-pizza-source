import { CrudService } from "./api/crud-service";

export class SizesService extends CrudService {
  constructor() {
    super("/api/sizes");
  }

  getSizes() {
    return this.get();
  }
}
