import { BMIData, BMRData, TDEEData } from './elements';

export default interface CalculatorVisitor {
  visitBMI(data: BMIData): number;
  visitBMR(data: BMRData): number;
  visitTDEE(data: TDEEData): number;
}
