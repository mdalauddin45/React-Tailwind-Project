import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Futures = ({ future }) => {
  return (
    <div className="flex items-center">
      <CheckCircleIcon className="h-4 w-4 text-green-500" />
      <p className="ml-2">{future}</p>
    </div>
  );
};

export default Futures;
