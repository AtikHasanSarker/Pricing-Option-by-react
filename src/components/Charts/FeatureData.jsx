import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const FeatureData = ({ featureData }) => {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];
    const renderCustomizedLabel = ({ feature, usage }) => {
    return `${feature} (${usage}%)`;};

  return (
    <div className='mt-10 lg:col-span-2'>
      <h2 className=" text-center text-2xl font-semibold mb-6">
        Feature Usage
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={featureData} dataKey="usage" outerRadius={100} label={renderCustomizedLabel}>
            {featureData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FeatureData;