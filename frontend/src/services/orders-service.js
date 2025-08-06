import { CrudService } from "@/services/api/crud-service";

class OrdersService extends CrudService {
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

export const ordersService = new OrdersService();
