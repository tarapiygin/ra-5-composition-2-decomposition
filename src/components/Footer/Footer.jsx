import { React } from 'react';
import BaseWidget from '../BaseWidget/BaseWidget';
import NewsList from '../NewsList/NewsList';
import AdWidget from '../AdWidget/AdWidget';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import { currencyList, newsList } from '../../data';
import { nanoid } from 'nanoid';
import './Footer.css';

/**
 * Компонент «футер»: групирует виджеты под строкой поиска
 */
export default function Footer() {

  return (
    <div className='Footer'>
      <div className='Footer-Column'>
        <BaseWidget
          id={nanoid()}
          headers={[{
            text: 'Погода',
            link: '#'
          }]}>
          <WeatherWidget
            icon='http://placehold.it/30x30'
            currentTemp='+17'
            futureTemp1='Утром +17'
            futureTemp2='Днем +20'
          />
        </BaseWidget>
        <BaseWidget
          id={nanoid()}
          headers={[{
            text: 'Посещаемое',
            link: '#'
          }]}>
          <NewsList newsList={newsList} />
        </BaseWidget>
      </div>
      <div className='Footer-Column'>
        <BaseWidget
          id={nanoid()}
          headers={[{
            text: 'Карта германии',
            link: '#'
          }]}>
          <NewsList newsList={newsList} />
        </BaseWidget>
        <BaseWidget
          id={nanoid()}
          headers={[{
            text: 'Телепрограмма',
            link: '#'
          }]}>
          <NewsList newsList={newsList} />
        </BaseWidget>
      </div>
      <div className='Footer-Column'>
        <BaseWidget
          id={nanoid()}
          headers={[{
            text: 'Эфир',
            link: '#'
          }]}>
          <NewsList newsList={newsList} />
        </BaseWidget>
      </div>
    </div>
  )
}