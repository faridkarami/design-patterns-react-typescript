import { BMIData, BMRData, TDEEData } from './elements';
import { ActivityLevel, Gender } from './enums';
import CalculatorVisitor from './visitor.interface';

export default class Calculator implements CalculatorVisitor {
  visitBMI(data: BMIData): number {
    const { weight, height } = data;
    return weight / (height / 100) ** 2;
  }

  visitBMR(data: BMRData): number {
    const { weight, height, age, gender } = data;
    return gender === Gender.Male
      ? 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age
      : 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
  }

  visitTDEE(data: TDEEData): number {
    const bmr = data.bmr;
    const activityMultiplier = {
      [ActivityLevel.Sedentary]: 1.2,
      [ActivityLevel.Light]: 1.375,
      [ActivityLevel.Moderate]: 1.55,
      [ActivityLevel.Active]: 1.725,
      [ActivityLevel.VeryActive]: 1.9,
    }[data.activityLevel];
    return bmr * activityMultiplier;
  }
}
