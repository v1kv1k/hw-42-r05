import { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = ({ url, resourceId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using resourceId if provided, otherwise fetch from base URL
        const finalUrl = resourceId ? `${url}/${resourceId}` : url;
        const response = await axios.get(finalUrl);
        
        setData(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, resourceId]); // Re-fetch when URL or resourceId changes

  return (
    <div className="data-fetcher">
      {loading && <p>Завантаження даних...</p>}
      
      {error && !loading && (
        <div className="error">
          <p>Помилка: {error}</p>
        </div>
      )}
      
      {!loading && !error && data && (
        <div className="data">
          <h2>Отримані дані:</h2>
          {Array.isArray(data) ? (
            <ul>
              {data.map((item, index) => (
                <li key={item.id || index}>
                  {item.title || item.name || JSON.stringify(item)}
                </li>
              ))}
            </ul>
          ) : (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  );
};

export default DataFetcher; 