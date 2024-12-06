import { ActivityLevel, Gender } from './enums';
import CalculatorVisitor from './visitor.interface';

interface Calculable {
  accept(visitor: CalculatorVisitor): number;
}

export class BMIData implements Calculable {
  constructor(public weight: number, public height: number) {}
  accept(visitor: CalculatorVisitor): number {
    return visitor.visitBMI(this);
  }
}

export class BMRData implements Calculable {
  constructor(
    public weight: number,
    public height: number,
    public age: number,
    public gender: Gender
  ) {}
  accept(visitor: CalculatorVisitor): number {
    return visitor.visitBMR(this);
  }
}

export class TDEEData implements Calculable {
  constructor(public bmr: number, public activityLevel: ActivityLevel) {}
  accept(visitor: CalculatorVisitor): number {
    return visitor.visitTDEE(this);
  }
}
