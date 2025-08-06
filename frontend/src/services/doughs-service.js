import { CrudService } from "@/services/api/crud-service";

class DoughsService extends CrudService {
  constructor() {
    super("/api/dough");
  }

  getDoughs() {
    return this.get();
  }
}

export const doughsService = new DoughsService();
