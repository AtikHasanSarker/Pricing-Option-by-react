import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const UsageData = ({ usageData }) => {
  return (
    <div>
      <h2 className=" text-center text-2xl font-semibold mb-6">
        AI Usage Growth
      </h2>

      <LineChart width="100%" height={300} data={usageData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default UsageData;