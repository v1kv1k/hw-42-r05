import { useState } from 'react';
import DataFetcher from './components/DataFetcher';
import './App.css';

function App() {
  const [resourceId, setResourceId] = useState('');
  
  return (
    <div className="app">
      <h1>React Data Fetching Example</h1>
      
      <div className="resource-selector">
        <label htmlFor="resourceId">Enter User ID (optional):</label>
        <input 
          type="text" 
          id="resourceId" 
          value={resourceId} 
          onChange={(e) => setResourceId(e.target.value)}
          placeholder="Leave empty to fetch all users"
        />
      </div>
      
      <div className="data-container">
        <DataFetcher 
          url="https://jsonplaceholder.typicode.com/users" 
          resourceId={resourceId}
        />
      </div>
    </div>
  );
}

export default App; 