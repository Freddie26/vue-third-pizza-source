import { CrudService } from "./api/crud-service";

export class MiscService extends CrudService {
  constructor() {
    super("/api/misc");
  }

  getMisc() {
    return this.get();
  }
}
