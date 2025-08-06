import { CrudService } from "./api/crud-service";

export class AddressesService extends CrudService {
  constructor() {
    super("/api/addresses");
  }

  getAddresses() {
    return this.get();
  }

  addAddress(address) {
    return this.post(address);
  }

  updateAddress(address) {
    return this.put(address);
  }

  removeAddress(addressId) {
    return this.delete(addressId);
  }
}
