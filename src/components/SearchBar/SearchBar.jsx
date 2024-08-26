import '../../css/basic.css';
import './SearchBar.css';
import getWeatherData from '../../js/weather';
import fetchPreview from '../../js/placeAutoComplete';
import { useState } from 'react';

export default function SearchBar({ location, setLocation }) {
  const [preview, setPreview] = useState();

  return (
    <div className="searchbar-container flex">
      <div className="searchbar flex">
        <i className="fa-solid fa-sun inner-input-left">{/*후에 햇님 이미지로 변경!!*/}</i>
        <input
          className="search"
          placeholder="날씨가 어떨까"
          onChange={(e) => {
            setLocation(e.target.value);
            fetchPreview(location, setPreview);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              getWeatherData(location);
              e.target.value = '';
            }
          }}
        ></input>
        <i
          className="fa-solid fa-magnifying-glass inner-input-right"
          onClick={(e) => {
            getWeatherData(location);
            e.target.value = '';
          }}
        ></i>
      </div>
      <div className="preview-container" style={{ position: 'absolute' }}>
        ssfsdf
      </div>
    </div>
  );
}
