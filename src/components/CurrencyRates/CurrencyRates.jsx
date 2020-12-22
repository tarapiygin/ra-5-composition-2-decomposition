import { nanoid } from 'nanoid';
import './CurrencyRates.css';

/**
 * Компонент «CurrencyRates»: рендерит курс валюты
 */
export default function CurrencyRates(props) {
  return (
    <ul className='CurrencyRates'>
      {props.currencyList.map((cur) => <li className='CurrencyRates_item' key={nanoid()}>
        <span>{cur.name}</span>
        {cur.exchange ? <span>{cur.exchange}</span> : null}
        <span>{cur.rate}</span>
        <span>{cur.changeRate}</span>
      </li>)}
    </ul>
  )
}