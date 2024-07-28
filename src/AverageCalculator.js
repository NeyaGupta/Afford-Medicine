import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [type, setType] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${type}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={fetchData}>Fetch Numbers</button>
      {data && (
        <div>
          <h2>Previous Window State</h2>
          <pre>{JSON.stringify(data.windowPrevState, null, 2)}</pre>
          <h2>Current Window State</h2>
          <pre>{JSON.stringify(data.windowCurrState, null, 2)}</pre>
          <h2>Fetched Numbers</h2>
          <pre>{JSON.stringify(data.numbers, null, 2)}</pre>
          <h2>Average</h2>
          <pre>{data.avg}</pre>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
