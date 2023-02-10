import React, { useState, useEffect } from 'react';

const DashboardWidget = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${wpApiSettings.root}wp/v2/posts`);
      const posts = await response.json();
      setData(posts);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Chart data:</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardWidget;
