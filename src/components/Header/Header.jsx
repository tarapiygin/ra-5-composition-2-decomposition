import { React } from 'react';
import { nanoid } from 'nanoid';
import BaseWidget from '../BaseWidget/BaseWidget';
import CurrencyRates from '../CurrencyRates/CurrencyRates';
import NewsList from '../NewsList/NewsList';
import AdWidget from '../AdWidget/AdWidget';
import { currencyList, newsList } from '../../data';
import './Header.css';

/**
 * Компонент «Шапка»: групирует виджет новостей и виджет рекламы над поисковой строкой
 */
export default function Header() {

  return (
    <div className="Header">
      <BaseWidget
        id={nanoid()}
        headers={[{
          text: 'Сейчас в сми',
          link: '#'
        },
        {
          text: 'В германии',
          link: '#'
        },
        {
          text: 'Рекомендуем',
          link: '#'
        }]}
        subtext={'31 июля, среда 02:32'} >
        <NewsList newsList={newsList} />
        <CurrencyRates currencyList={currencyList} />
      </BaseWidget>

      <AdWidget
        title='Работа над ошибками'
        img='http://placehold.it/300x300'
        text='Смотрите на ядндексе дзене' />
    </div>
  )
}
