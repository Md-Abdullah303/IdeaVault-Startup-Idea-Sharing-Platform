"use client";
import { Label, Legend, Pie, PieChart, Tooltip } from "recharts";

const UserPaiChart = ({ usersPots, interactions }) => {
  const usersPotsLength = usersPots.length;
  const interactionsLength = interactions.length;
  const data = [
    { name: "Post", value: usersPotsLength || 0, fill: "#0088FE" },
    { name: "Interactions", value: interactionsLength || 0, fill: "#00C49F" },
  ];
  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "400px",
        maxHeight: "60vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      />
      <Legend />
      <Tooltip />
    </PieChart>
  );
};

export default UserPaiChart;
