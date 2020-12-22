/**
 * Компонент «AdWidget»: рекламный виджет для показа текстов и банеров в зависимости от переданных параметров
 */

export default function AdWidget(props) {
  const { img, title, text } = props;
  return (
    <div className='AdWidget'>
      {img ? <img src={img} alt={text ? text : ''} /> : null}
      {title ? <div>{title}</div> : null}
      {text ? <div>{text}</div> : null}
    </div>
  )
}