import { CrudService } from "@/services/api/crud-service";

class MiscService extends CrudService {
  constructor() {
    super("/api/misc");
  }

  getMisc() {
    return this.get();
  }
}

export const miscService = new MiscService();
