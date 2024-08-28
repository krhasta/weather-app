import { useState, useEffect, useRef } from 'react';
import getWeatherData from '../../js/weather';
import fetchPreview from '../../js/placeAutoComplete';
import SearchPreview from './SearchPreview';
import './SearchBar.css';

export default function SearchBar(props) {
  const [preview, setPreview] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  function clicked() {
    const isInputActive = document.activeElement === inputRef.current;
    setIsFocused(isInputActive ? true : false);
  }

  useEffect(() => {
    return document.addEventListener('click', clicked);
  }, []);

  return (
    <div className="searchbar-container flex">
      <div className="searchbar flex">
        <i className="fa-solid fa-sun inner-input-left">{/*후에 햇님 이미지로 변경!!*/}</i>
        <input
          className="search"
          placeholder="날씨가 어떨까"
          onChange={(e) => {
            props.setLocation(e.target.value);
            fetchPreview(props.location, setPreview);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.setWeatherStatus(getWeatherData(props.location));
              e.target.value = '';
              setIsFocused(false);
              // props.setWeatherStatus(props.locaation);
            }
          }}
          ref={inputRef}
        ></input>
        <i
          className="fa-solid fa-magnifying-glass inner-input-right"
          onClick={(e) => {
            getWeatherData(props.location);
            e.target.value = '';
          }}
        ></i>
      </div>
      {isFocused && preview && <SearchPreview location={preview} getWeatherData={getWeatherData} />}
    </div>
  );
}
