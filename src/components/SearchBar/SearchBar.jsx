import { useState, useEffect, useRef } from 'react';
import getWeatherData from '../../js/weather';
import fetchPreview from '../../js/placeAutoComplete';
import SearchPreview from './SearchPreview';
import './SearchBar.css';

export default function SearchBar({ location, setLocation, setWeatherData }) {
  const [preview, setPreview] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  function handleChange(event) {
    try {
      setLocation(event.target.value);
      fetchPreview(location, setPreview);
    } catch (error) {
      console.log('function handleChange error!', error);
    }
  }

  async function handleKeyDown(event) {
    try {
      if (event.key === 'Enter') {
        const data = await getWeatherData(event.target.value);
        setWeatherData(data);
        setIsFocused(false);
        event.target.value = '';
      }
    } catch (error) {
      console.log('function handleKeyDown error!', error);
    }
  }

  function isClicked() {
    const isInputActive = document.activeElement === inputRef.current;
    setIsFocused(isInputActive ? true : false);
  }

  useEffect(() => {
    return document.addEventListener('click', isClicked);
  }, []);

  return (
    <div className="searchbar-container flex">
      <div className="searchbar flex">
        <i className="fa-solid fa-sun inner-input-left">{/*후에 햇님 이미지로 변경!!*/}</i>
        <input
          className="search"
          placeholder="날씨가 어떨까"
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
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
