import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import '../../css/basic.css';
import './ShowWeather.css';

export default function ShowWeather() {
  return (
    <div className="flex">
      <div className="box-weather"></div>
    </div>
  );
}
