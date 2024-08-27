import { useState } from 'react';
import getWeatherData from '../../js/weather';
import fetchPreview from '../../js/placeAutoComplete';
import SearchPreview from './SearchPreview';
import './SearchBar.css';

export default function SearchBar({ location, setLocation }) {
  const [preview, setPreview] = useState(location);

  // 현재 문제점:
  // 앱을 로딩할 때 preview의 데이터가 fetch 되기 전에 SearchPreview를 마운트 하므로
  // 오류가 발생.

  // useEffect로 해결해보자.

  return (
    <div className="searchbar-container flex">
      <div className="searchbar flex">
        <i className="fa-solid fa-sun inner-input-left">{/*후에 햇님 이미지로 변경!!*/}</i>
        <input
          className=""
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
      {preview && <SearchPreview preview={preview} />}

      {/* <SearchPreview preview={preview} /> */}
    </div>
  );
}
