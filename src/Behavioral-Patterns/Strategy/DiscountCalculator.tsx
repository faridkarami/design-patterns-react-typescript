import { useState } from 'react';
import DiscountStrategy from './pattern/discount-strategy.interface';
import FlatDiscount from './pattern/strategies/flat-discount.strategy';
import LoyaltyDiscount from './pattern/strategies/loyalty-discount.strategy';
import TimeBasedDiscount from './pattern/strategies/time-based-discount.strategy';

interface DiscountCalculatorProps {
  amount: number;
}

const DiscountCalculator: React.FC<DiscountCalculatorProps> = ({ amount }) => {
  const [strategy, setStrategy] = useState<DiscountStrategy>(
    new FlatDiscount(10)
  );
  const [discount, setDiscount] = useState<number>(
    strategy.calculateDiscount(amount)
  );

  const changeStrategy = (newStrategy: DiscountStrategy) => {
    setStrategy(newStrategy);
    setDiscount(newStrategy.calculateDiscount(amount));
  };

  return (
    <div>
      <h2>Discount Calculator</h2>
      <p>Total Amount: {amount} units</p>
      <div>
        <button onClick={() => changeStrategy(new FlatDiscount(10))}>
          Flat Discount (10%)
        </button>
        <button onClick={() => changeStrategy(new LoyaltyDiscount(180))}>
          Loyalty Discount (180 Points)
        </button>
        <button
          onClick={() =>
            changeStrategy(
              new TimeBasedDiscount(
                new Date('2024-08-02'),
                new Date('2028-10-24')
              )
            )
          }
        >
          Time-Based Discount
        </button>
      </div>
      <div>
        <h3>Applied Discount:</h3>
        <p>{discount.toFixed(2)} units</p>
      </div>
      <div>
        <h3>Final Amount:</h3>
        <p>{(amount - discount).toFixed(2)} units</p>
      </div>
    </div>
  );
};

export default DiscountCalculator;
