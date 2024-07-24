import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      {data.map((detail, index) => (
        <div key={index} className='profile-card'>
          <div className='image'>
            <img src={`http://localhost:5000${detail.image}`} alt={`${detail.name}'s profile`} />
          </div>
          <div className='details'>
            <h4>{detail.name}</h4>
            <h4>{detail.position}</h4>
            <h4>{detail.email}</h4>
            <p>{detail.description}</p>
            <h4>{detail.location}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;