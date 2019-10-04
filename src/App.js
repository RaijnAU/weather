import React, {useState, useEffect} from 'react';

import './App.css';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  //const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [humid, setHumid] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('https://api.openweathermap.org/data/2.5/weather?q=Perth%2CAustradiva&units=metric&appid=6dc9c2a99870e8a1a5ff5c72ecc15d4e');
      setCity(response.data.name);
      //setCountry(response.data.sys.country);
      setTemp(response.data.main.temp.toPrecision(3));
      setHumid(response.data.main.humidity);
      setDesc(response.data.weather[0].description.replace(/^\w/, c => c.toUpperCase()));
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4 img text-white font-weight-bold">
      <h4 className="display-4 text-center mb-5">Australian Weather App</h4>
      <div className="row">
        <div className="col text-center city">
          {city}
        </div>
          <div className="col text-center">
          <div className="mb-1 temp">{temp}°C</div>
          <div className="mb-1 description">{desc}</div>
          <div className="mb-1 humidity">{humid}% Humidity</div>
        </div>
      </div>
    </div>
  );
}

export default App;
