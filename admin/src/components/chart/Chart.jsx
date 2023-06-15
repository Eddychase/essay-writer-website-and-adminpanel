import "./chart.scss";
import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ aspect, title }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://essay-writer-server.onrender.com/api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  const chartData = [
    { name: "January", Total: 0 },
    { name: "February", Total: 0 },
    { name: "March", Total: 0 },
    { name: "April", Total: 0 },
    { name: "May", Total: 0 },
    { name: "June", Total: 0 },
  ];

orders.forEach((transaction) => {
    const month = new Date(transaction.createdAt).getMonth();
    chartData[month].Total += transaction.price;
  });

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
