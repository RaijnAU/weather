import React, { useState, useEffect } from 'react';
import Weather from './components/weather';
import Loader from './components/loader'

import './App.css';
import axios from 'axios';

function App() {
  const [selectedCity, setSelectedCity] = useState('Perth');
  const [weather, setWeather] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async city => {
      setIsLoading(true);
      const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2CAustradiva&units=metric&appid=6dc9c2a99870e8a1a5ff5c72ecc15d4e`);
      setWeather({
        city: response.data.name,
        description: response.data.weather[0].description.replace(/^\w/, c => c.toUpperCase()),
        humidity: response.data.main.humidity,
        temp: response.data.main.temp.toPrecision(3),
      });
      setIsLoading(false);
    };
    fetchData(selectedCity);
  }, [selectedCity]);

  const cities = ['Perth', 'Sydney', 'Melbourne', 'Brisbane', 'Adelaide']

  return (
    <div className={`container mt-4 text-white font-weight-bold ${selectedCity}`}>
      <h4 className="display-4 text-center pt-2 mb-5">Australian Weather App</h4>
      <div className="mx-auto row">
        {cities.map(value => <span key={value} onClick={() => setSelectedCity(value)} className="text-center col-sm mb-5" >{value}</span>)}
      </div>
      {isLoading ? <Loader /> : !!weather ?
          <div className="row">
            <div className="col text-center city">
              {selectedCity}
            </div>
            <Weather {...weather} />
          </div>
          : null}
    </div>
  );
}

export default App;
