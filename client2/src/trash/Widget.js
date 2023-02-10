import React, { useState, useEffect } from "react";
import { LineChart, Label, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Widget = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Static data for the chart
    const chartData = [
      { name: "Day 1", visitors: 4000 },
      { name: "Day 2", visitors: 3000 },
      { name: "Day 3", visitors: 2000 },
      { name: "Day 4", visitors: 2780 },
      { name: "Day 5", visitors: 1890 },
      { name: "Day 6", visitors: 2390 },
      { name: "Day 7", visitors: 3490 },
      { name: "Day 8", visitors: 1890 },
      { name: "Day 9", visitors: 2390 },
      { name: "Day 10", visitors: 3490 },


      { name: "Day 11", visitors: 4000 },
      { name: "Day 12", visitors: 3000 },
      { name: "Day 13", visitors: 2000 },
      { name: "Day 14", visitors: 2780 },
      { name: "Day 15", visitors: 1890 },
      { name: "Day 16", visitors: 2390 },
      { name: "Day 17", visitors: 3490 },
      { name: "Day 18", visitors: 1890 },
      { name: "Day 19", visitors: 2390 },
      { name: "Day 20", visitors: 3490 },


      { name: "Day 21", visitors: 4000 },
      { name: "Day 22", visitors: 3000 },
      { name: "Day 23", visitors: 2000 },
      { name: "Day 24", visitors: 2780 },
      { name: "Day 25", visitors: 1890 },
      { name: "Day 26", visitors: 2390 },
      { name: "Day 27", visitors: 3490 },
      { name: "Day 28", visitors: 1890 },
      { name: "Day 29", visitors: 2390 },
      { name: "Day 30", visitors: 3490 },
    ];

    setData(chartData);
  }, []);

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="visitors" stroke="#8884d8"  />
      {/* <Label value={data.visitors} position="top" /> */}
      {/* <Line type="monotone"  dataKey="pv" stroke="#8884d8" label={"visitors"}/>
   <Line type="monotone"  strokeDasharray="3 3" dataKey="uv" stroke="red" /> */}
    </LineChart>
  );
};

export default Widget;
