import { useEffect } from 'react';
import getWeatherData from '../../js/weather';
import './Weather.css';

export default function Weather(props) {
  useEffect(() => {
    getWeatherData(props.IP);
  });

  return (
    <div className="flex">
      <h1>{props.IP}</h1>

      {/* <div className="box-weather">{props.weatherData}</div> */}
    </div>
  );
}
