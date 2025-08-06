import { CrudService } from "./api/crud-service";

export class OrdersService extends CrudService {
  constructor() {
    super("/api/orders");
  }

  getOrders() {
    return this.get();
  }

  createOrder(order) {
    return this.post(order);
  }

  removeOrder(id) {
    return this.delete(id);
  }
}
