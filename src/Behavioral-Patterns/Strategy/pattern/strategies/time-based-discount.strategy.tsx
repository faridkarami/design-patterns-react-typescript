import DiscountStrategy from '../discount-strategy.interface';

export default class TimeBasedDiscount implements DiscountStrategy {
  private startTime: Date;
  private endTime: Date;

  constructor(startTime: Date, endTime: Date) {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  calculateDiscount(amount: number): number {
    const now = new Date();
    if (now >= this.startTime && now <= this.endTime) {
      return amount * 0.3;
    }
    return 0;
  }
}
