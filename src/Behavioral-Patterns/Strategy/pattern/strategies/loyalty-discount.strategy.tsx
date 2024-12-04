import DiscountStrategy from '../discount-strategy.interface';

export default class LoyaltyDiscount implements DiscountStrategy {
  private loyaltyPoints: number;

  constructor(loyaltyPoints: number) {
    this.loyaltyPoints = loyaltyPoints;
  }

  calculateDiscount(amount: number): number {
    const discount = Math.min(this.loyaltyPoints * 2, amount * 0.5);
    return discount;
  }
}
