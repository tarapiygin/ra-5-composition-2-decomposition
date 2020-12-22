import { React } from 'react';
import './WeatherWidget.css';

/**
 * Компонент «WeatherWidget»: виджет погоды для отображения текущей и будующей температуры
 */

export default function WeatherWidget(props) {
  const { icon, currentTemp, futureTemp1, futureTemp2 } = props;
  return (
    <div className='WeatherWidget'>
      <div className='WeatherWidget-Content'>
        <div className='WeatherWidget-Column'>
          <img src={icon} className='WeatherWidget_icon' alt={currentTemp} />
          <div className='WeatherWidget_temp'>{currentTemp}</div>
        </div>
        <div className='WeatherWidget-Column'>
          <div>{futureTemp1},</div>
          <div>{futureTemp2}</div>
        </div>
      </div>
    </div>
  )
}