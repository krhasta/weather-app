import { useEffect, useRef, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ShowWeather from './components/ShowWeather/ShowWeather';
import fetchUserLocation from './js/UserLocation';
import './css/App.css';

function App() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherStatus, setWeatherStatus] = useState(null);

  // useEffect(() => {
  //   fetchUserLocation(setLocation);
  // }, []);

  return (
    <>
      <h1 className="title">City weather - Globals</h1>
      <SearchBar
        location={location}
        setLocation={setLocation}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        setWeatherStatus={setWeatherStatus}
      />
      <ShowWeather weatherStatus={weatherStatus}></ShowWeather>
      <button
        onClick={() => {
          console.log(weatherStatus);
        }}
      ></button>
    </>
  );
}

export default App;
