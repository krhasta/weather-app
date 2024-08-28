import { useEffect, useRef, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ShowWeather from './components/ShowWeather/ShowWeather';
import fetchInitLocation from './js/initialUserLocation';
import './css/App.css';

function App() {
  const [location, setLocation] = useState(null);
  const [country, setCountry] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  // useEffect(() => {
  //   fetchInitLocation(setLocation, setCountry);
  // }, []);

  return (
    <>
      <h1 className="title">
        {/* {location}, {country}{' '} */}
        City weather - Globals
      </h1>
      <SearchBar
        location={location}
        setLocation={setLocation}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
      />
      <ShowWeather></ShowWeather>
    </>
  );
}

export default App;
