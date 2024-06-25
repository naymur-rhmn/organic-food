import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: "Apple", uv: 300, pv: 2000, amt: 2100 },
  { name: "Strawberry", uv: 500, pv: 2200, amt: 2300 },
  { name: "Chia Seed", uv: 350, pv: 1800, amt: 1900 },
  { name: "Avocado", uv: 600, pv: 2400, amt: 2500 },
  { name: "Carrots", uv: 400, pv: 2300, amt: 2400 },
  { name: "Blueberries", uv: 700, pv: 2600, amt: 2700 },
  { name: "Pears", uv: 200, pv: 2100, amt: 2200 },
  { name: "Cauliflower", uv: 800, pv: 2800, amt: 2900 },
];

const renderLineChart = (
  <LineChart width={890} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);

const SaleLineChart = () => {
  return <div className="w-full">{renderLineChart}</div>;
};

export default SaleLineChart;
