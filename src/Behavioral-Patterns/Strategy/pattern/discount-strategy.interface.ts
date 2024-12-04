export default interface DiscountStrategy {
  calculateDiscount(amount: number): number;
}