import { useEffect, useRef, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Weather from './components/ShowWeather/Weather';
import fetchUserLocation from './js/UserLocation';
import getIP from './js/initUserLocation';
import './css/App.css';

function App() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [ShowWeather, setShowWeather] = useState(false);
  const [IP, setIP] = useState(null);

  // useEffect(() => {
  //   fetchUserLocation(setLocation);
  // }, []);

  useEffect(() => {
    getIP(setIP);
  }, []);

  return (
    <>
      <h1 className="title">City weather - Globals</h1>
      <SearchBar location={location} setLocation={setLocation} setWeatherData={setWeatherData} />
      <Weather weatherData={weatherData} initUserData={IP}></Weather>
      {/* {weatherData && <Weather weatherData={weatherData}></Weather>} */}
    </>
  );
}

export default App;
