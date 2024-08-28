import './SearchBar.css';

export default function SearchPreview({ location, getWeatherData }) {
  return (
    <ul className="preview-container flex">
      {location.map((item, index) => {
        return (
          <li
            className="preview-list"
            key={index}
            onClick={(event) => {
              const str = event.target.innerText.split(',')[0];
              getWeatherData(str);
            }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
