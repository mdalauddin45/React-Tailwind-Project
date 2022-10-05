import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: [
        "Awesome Feature",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Hudai feature",
        "Ajaira Feature",
      ],
    },
    {
      id: 2,
      name: "Medium",
      price: 9.99,
      features: [
        "Everything on Free",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Hudai feature",
        "Ajaira Feature",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.99,
      features: [
        "Everything on Premium",
        "Extra Feature",
        "Unnecessary Feature",
        "Will never use Feature",
        "Hudai feature",
        "Ajaira Feature",
      ],
    },
  ];
  return (
    <div>
      <h1 className="text-5xl mt-5 bg-purple-300 p-12 text-white font-bold">
        Best Deal of the Town
      </h1>
      <div className="grid m-10 md:grid-cols-3 gap-3 ">
        {pricingOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
