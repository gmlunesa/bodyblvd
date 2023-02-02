import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

import { Information } from "../helpers/information";

const Evaluation = () => {
  const { currentBmi, currentLevel } = useContext(CalcContext);
  return (
    <div className="w-full max-w-xs md:max-w-sm p-6 my-2 text-white bg-purple-900/20 rounded-lg shadow">
      <span class="bg-rose-100 text-rose-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded">
        {currentBmi.toFixed(2)}
      </span>
      <span class="bg-rose-600 text-rose-100 text-sm font-medium mr-2 px-2.5 py-1.5 rounded">
        ･ﾟ✧ {Information[currentLevel].Name} ✧･ﾟ
      </span>
      <p className="mt-6">{Information[currentLevel].Message}</p>
    </div>
  );
};

export default Evaluation;
