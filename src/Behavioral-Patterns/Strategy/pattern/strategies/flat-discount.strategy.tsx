import DiscountStrategy from '../discount-strategy.interface';

export default class FlatDiscount implements DiscountStrategy {
  private percentage: number;

  constructor(percentage: number) {
    this.percentage = percentage;
  }

  calculateDiscount(amount: number): number {
    return amount * (this.percentage / 100);
  }
}
