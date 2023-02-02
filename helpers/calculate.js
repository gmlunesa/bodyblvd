import { Bmi } from "./constants";
export const CalculateBMI = (height, weight) => {
  // Calculate BMI
  const bmi = (weight / height / height) * 10000;
  for (const bmiLevel in Bmi) {
    // If BMI is less than the maximum threshold for the specific level,
    // Return object with the BMI and the level type
    if (bmi < Bmi[bmiLevel]) {
      return {
        bmi,
        bmiLevel,
      };
    }
  }

  return {};
};
