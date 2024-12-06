import { useState } from 'react';
import Calculator from './pattern/concrete-visitor';
import { BMIData, BMRData, TDEEData } from './pattern/elements';
import { ActivityLevel, Gender } from './pattern/enums';

const FitnessCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(115);
  const [height, setHeight] = useState<number>(178);
  const [age, setAge] = useState<number>(32);
  const [gender, setGender] = useState<Gender>(Gender.Male);
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>(
    ActivityLevel.Moderate
  );

  const calculator = new Calculator();

  const calculateResults = () => {
    const bmiData = new BMIData(weight, height);
    const bmi = bmiData.accept(calculator);

    const bmrData = new BMRData(weight, height, age, gender);
    const bmr = bmrData.accept(calculator);

    const tdeeData = new TDEEData(bmr, activityLevel);
    const tdee = tdeeData.accept(calculator);

    return { bmr, bmi, tdee };
  };

  const { bmi, bmr, tdee } = calculateResults();

  return (
    <div>
      <label>
        Weight (kg):
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Height (cm):
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Gender:
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value as Gender)}
        >
          {Object.entries(Gender).map(([key, value]) => (
            <option key={key} value={value}>
              {key}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Activity Level:
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
        >
          {Object.entries(ActivityLevel).map(([key, value]) => (
            <option key={key} value={value}>
              {key}
            </option>
          ))}
        </select>
      </label>
      <h2>Results</h2>
      <p>BMR: {bmr.toFixed(2)}</p>
      <p>BMI: {bmi.toFixed(2)}</p>
      <p>TDEE: {tdee.toFixed(2)}</p>
    </div>
  );
};

export default FitnessCalculator;
