export interface Order {
  id: number;
  qty: number;
}

class OrderService {
  static instance: OrderService;
  data: Order[] = [];

  constructor() {
    if (!OrderService.instance) {
      this.data = [];
      OrderService.instance = this;
    }
    return OrderService.instance;
  }

  set(order: Order) {
    this.data.push(order);
  }

  get() {
    return this.data;
  }
}

const service = new OrderService();
Object.freeze(service);
export default service;