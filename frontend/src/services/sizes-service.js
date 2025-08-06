import { CrudService } from "@/services/api/crud-service";

class SizesService extends CrudService {
  constructor() {
    super("/api/sizes");
  }

  getSizes() {
    return this.get();
  }
}

export const sizesService = new SizesService();
