import { nanoid } from 'nanoid';

/**
 * Компонент «BaseWidget»: базовый компонент виджета для рендера заголовков
 */
export default function BaseWidget(props) {
  const { id, headers, subtext } = props;

  return (
    <div id={id} className='Widget'>

      <div className='Widget_header'>
        {headers.map((header) => <a key={nanoid()} href={header.link}>{header.text}</a>)}
        {subtext ? <span className='Widget_subtext'>{subtext}</span> : null}
      </div>
      {props.children}
    </div>
  )

}