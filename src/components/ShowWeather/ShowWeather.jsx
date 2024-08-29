import './ShowWeather.css';

export default function ShowWeather(props) {
  return (
    <div className="flex">
      <div className="box-weather">{props.weatherData}</div>
    </div>
  );
}
