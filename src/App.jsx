import { useEffect, useRef, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Weather from './components/ShowWeather/Weather';
import fetchUserLocation from './js/UserLocation';
import initialWeather from './js/initUserLocation';
import './css/App.css';

function App() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchInitialWeather() {
      try {
        const temp = await initialWeather();
        console.log('temp:', temp);
        setWeatherData(temp);
      } catch (error) {
        console.error('Failed to fetch initial weather data:', error);
      }
    }
    fetchInitialWeather();
  }, []);

  return (
    <>
      <h1 className="title">City weather - Globals</h1>
      <SearchBar location={location} setLocation={setLocation} setWeatherData={setWeatherData} />
      {/* <Weather weatherData={weatherData}></Weather> */}
      {weatherData && <Weather weatherData={weatherData} />}
    </>
  );
}

export default App;
