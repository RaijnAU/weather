import React, { useState, useEffect } from 'react';
import Weather from './components/weather';

import './App.css';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('Perth');
  //const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [humid, setHumid] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    fetchData(city);
  }, [city]);

  const fetchData = async (city) => {
    const response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2CAustradiva&units=metric&appid=6dc9c2a99870e8a1a5ff5c72ecc15d4e`);
    setCity(response.data.name);
    //setCountry(response.data.sys.country);
    setTemp(response.data.main.temp.toPrecision(3));
    setHumid(response.data.main.humidity);
    setDesc(response.data.weather[0].description.replace(/^\w/, c => c.toUpperCase()));
  };


  const cities = ['Perth', 'Sydney', 'Melbourne', 'Brisbane', 'Adelaide']

  const citySelect = city => fetchData(city);

  return (
    <div className={`container mt-4 ${city} text-white font-weight-bold`}>
      <h4 className="display-4 text-center pt-2 mb-5">Australian Weather App</h4>
      <div className="mx-auto row">
        {cities.map((x, index) => <span onClick={() => citySelect(x)} className="text-center col-sm mb-5" key={index}>{x}</span>)}
      </div>
      <div className="row">
        <div className="col text-center city">
          {city}
        </div>
        <Weather temp={temp} desc={desc} humid={humid} />
      </div>
    </div>
  );
}

export default App;
