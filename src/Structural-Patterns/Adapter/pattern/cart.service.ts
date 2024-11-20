import { IMemoryAdapter } from "./Adapters/memory-adapter.interface";
import { IProduct } from "./product.interface";

export class CartService {
  private items: IProduct[] = [];
  private memoryAdapter: IMemoryAdapter<IProduct>;

  constructor(storageAdapter: IMemoryAdapter<IProduct>) {
    this.memoryAdapter = storageAdapter;
    this.items = this.memoryAdapter.load();
  }

  add(id: number, qty: number): void {
    const existingProduct = this.items.find(item => item.id === id);
    if (existingProduct) {
      existingProduct.qty += qty;
    } else {
      this.items.push({ id, qty });
    }
    this.memoryAdapter.save(this.items);
  }

  get(): IProduct[] {
    return this.items;
  }

  remove(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
    this.memoryAdapter.save(this.items);
  }

  increaseQuantity(id: number, qty: number): void {
    const product = this.items.find(item => item.id === id);
    if (product) {
      product.qty += qty;
      this.memoryAdapter.save(this.items);
    } else {
      throw new Error(`Product with id ${id} not found`);
    }
  }
}
