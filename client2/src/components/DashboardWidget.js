import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import Select from './constants/Select';


const DashboardWidget = () => {
  const [data, setData] = useState([]);
  const [duration, setDuration] = useState('7');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/wordpress/wp-json/dashboard-widget/v1/sample-data/${duration}`);
      let result = JSON.parse(await response.data);
      setData(result);
    }
    fetchData();
  }, [duration]);

  const handleChange = (event) => {
    setDuration(event.target.value);
  };

  return (
    <div>
      <div className="dashboard-widget">
        <Select handleChange={handleChange} value={duration} />
      </div>
      <LineChart width={500} height={300} data={data} style={{marginTop: '50px'}}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="visitors" stroke="#8884d8" />
        <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default DashboardWidget;
