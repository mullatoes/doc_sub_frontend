import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  //   tension: 0.3,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Overall Transactions",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Transactions",
      data: [
        10000, 18000, 21000, 35000, 12000, 14000, 150000, 10000, 18000, 21000,
        35000, 12000, 14000,
      ],
      borderColor: "#AEA7F1",
      backgroundColor: "#AEA7F1",
    },
  ],
};

export default function App() {
  return <Line options={options} data={data} />;
}
