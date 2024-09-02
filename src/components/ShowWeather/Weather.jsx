import { useEffect } from 'react';
import getWeatherData from '../../js/weather';
import './Weather.css';

export default function Weather({ weatherData }) {
  if (!weatherData) {
    return <div>날씨 정보를 불러오는 중입니다...</div>;
  }

  const { location, current, forecast } = weatherData;

  return (
    <div className="flex">
      <div className="box-weather">
        <h2>{location.name}의 날씨</h2>
        <p>온도: {current.temp_c}°C</p>
        <p>날씨: {current.condition.text}</p>
        {/* 추가적인 날씨 정보 표시 */}
        <h3>3일간의 예보</h3>
        <ul>
          {forecast.forecastday.map((day) => (
            <li key={day.date}>
              {day.date}: {day.day.avgtemp_c}°C, {day.day.condition.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
