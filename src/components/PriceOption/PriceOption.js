import React from "react";

import Futures from "../Futures/Futures";

const PriceOption = ({ option }) => {
  const { features } = option;
  return (
    <div className="bg-indigo-300 rounded-md m-3 p-6 ">
      <div>
        <h3>
          <span className="text-6xl font-bold text-white">{option.price}</span>
          <span className="text-2xl text-gray-200">/mon</span>
        </h3>
        <p className="text-3xl my-4">{option.name} </p>
      </div>
      <div>
        {features.map((future, idx) => (
          <Futures key={idx} future={future}></Futures>
        ))}
        <button className="bg-green-500 mt-4 w-full rounded-md py-2 font-bold text-white hover:">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PriceOption;
