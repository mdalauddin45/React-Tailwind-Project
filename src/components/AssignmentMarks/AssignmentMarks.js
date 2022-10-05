import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const AMarks = () => {
  const data = [
    {
      name: "A-1",
      marks: 4000,
      quiz: 2400,
      amt: 2400,
    },
    {
      name: "A-2",
      marks: 3000,
      quiz: 1398,
      amt: 2210,
    },
    {
      name: "A-3",
      marks: 2000,
      quiz: 9800,
      amt: 2290,
    },
    {
      name: "A-4",
      marks: 2780,
      quiz: 3908,
      amt: 2000,
    },
    {
      name: "A-5",
      marks: 1890,
      quiz: 4800,
      amt: 2181,
    },
    {
      name: "A-6",
      marks: 2390,
      quiz: 3800,
      amt: 2500,
    },
    {
      name: "A-7",
      marks: 3490,
      quiz: 4300,
      amt: 2100,
    },
  ];

  return (
    <LineChart width={500} height={400} data={data}>
      <XAxis dataKey="name" />
      <Line type="monotone" dataKey="marks" stroke="#8884d8" />
      <YAxis />
      <Tooltip></Tooltip>
    </LineChart>
  );
};

export default AMarks;
