import React from "react";

const Form = () => {
  return (
    <div className="w-full max-w-sm p-6 my-2 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-rose-50">
      <form className="space-y-6" action="#">
        <div>
          <label
            for="height"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Height
          </label>
          <input
            type="number"
            name="height"
            id="height"
            className="bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-900 dark:border-red-800 dark:text-red-50"
            placeholder="cm"
            min={0}
            required
          />
        </div>
        <div>
          <label
            for="weight"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Weight
          </label>
          <input
            type="number"
            name="weight"
            id="weight"
            className="bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-900 dark:border-red-800 dark:text-red-50"
            placeholder="kg"
            min={0}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-rose-900 bg-rose-200 hover:bg-rose-300 focus:ring-4 focus:outline-none focus:ring-rose-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-rose-50 dark:bg-rose-500 dark:hover:bg-rose-600 dark:focus:ring-rose-800"
        >
          Calculate ♡
        </button>
      </form>
    </div>
  );
};

export default Form;
