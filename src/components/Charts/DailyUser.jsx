import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const DailyUser = ({ dailyUser }) => {
  return (
    <div>
      <h2 className=" text-center text-2xl font-semibold mb-6">Daily Users</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dailyUser}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="activeUsers" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyUser;