import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { CalculateBMI } from "../helpers/calculate";

const Form = () => {
  const { setCurrentBmi, setCurrentLevel } = useContext(CalcContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { height, weight } = e.target.elements;
    const result = CalculateBMI(height.value, weight.value);

    setCurrentBmi(result.bmi);
    setCurrentLevel(result.bmiLevel);
  };
  return (
    <div className="w-full max-w-sm p-6 my-2 bg-rose-800/20 text-rose-50 rounded-lg shadow">
      <form className="space-y-6" onSubmit={handleOnSubmit}>
        <div>
          <label
            htmlFor="height"
            className="block mb-2 text-sm font-medium text-white"
          >
            Height
          </label>
          <input
            type="number"
            name="height"
            id="height"
            className="bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5"
            placeholder="cm"
            min={0}
            required
          />
        </div>
        <div>
          <label
            htmlFor="weight"
            className="block mb-2 text-sm font-medium text-white"
          >
            Weight
          </label>
          <input
            type="number"
            name="weight"
            id="weight"
            className="bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5"
            placeholder="kg"
            min={0}
            required
          />
        </div>
        <button
          type="submit"
          value="Submit"
          className="w-full 00 focus:ring-4 focus:outline-none focus:ring-rose-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-rose-50 bg-rose-500 hover:bg-rose-600 focus:ring-rose-800"
        >
          Calculate ♡
        </button>
      </form>
    </div>
  );
};

export default Form;
