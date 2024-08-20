import React, { useState, useEffect } from 'react';
import Assessment from './Assessment';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API for a given ID
    const fetchDataForId = async (id) => {
      const apiUrl = `https://iohpo6uldwgeqgeiddliptycke0gefgy.lambda-url.ap-south-1.on.aws/${id}`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Network response was not ok for ID ${id}`);
        }
        return await response.json();
      } catch (error) {
        throw new Error(`Error fetching data for ID ${id}: ${error.message}`);
      }
    };

    // Function to fetch data for IDs from 1 to 10
    const fetchAllData = async () => {
      try {
        const results = [];
        for (let id = 1; id <= 10; id++) {
          const result = await fetchDataForId(id);
          results.push(result);
        }
        setData(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <div style={{ color: "white" }}>Loading...</div>

  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Assessment questions={data} />
    </div>
  );
};

export default DataFetchingComponent;
