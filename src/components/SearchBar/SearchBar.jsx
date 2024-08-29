import { useState, useEffect, useRef } from 'react';
import getWeatherData from '../../js/weather';
import fetchPreview from '../../js/placeAutoComplete';
import SearchPreview from './SearchPreview';
import './SearchBar.css';

export default function SearchBar({ location, setLocation, setWeatherData }) {
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
            setLocation(e.target.value);
            fetchPreview(location, setPreview);
          }}
          onKeyDown={async (e) => {
            if (e.key === 'Enter') {
              const aaa = await getWeatherData(location);
              setWeatherData(aaa);
              e.target.value = '';
              setIsFocused(false);
            }
          }}
          // onKeyDown={async (e) => {
          //   if (e.key === 'Enter') {
          //     try {
          //       const data = await getWeatherData(location);
          //       setWeatherData(data);
          //       e.target.value = '';
          //       setIsFocused(false);
          //     } catch (error) {
          //       console.error('Error fetching weather data:', error);
          //       setWeatherData(null);
          //     }
          //   }
          // }}
          ref={inputRef}
        ></input>
        <i
          className="fa-solid fa-magnifying-glass inner-input-right"
          onClick={(e) => {
            getWeatherData(location);
            e.target.value = '';
          }}
        ></i>
      </div>
      {isFocused && preview && <SearchPreview location={preview} getWeatherData={getWeatherData} />}
    </div>
  );
}
