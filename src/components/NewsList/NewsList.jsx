import { nanoid } from 'nanoid';
/**
 * Компонент «NewsList»: рендерит список новостей
 */
export default function NewsList(props) {
  return (
    <ul className='NewsList'>
      {
        props.newsList.map((news) => (<li key={nanoid()}>
          {news.icon ? <span className='NewsItem_content NewsItem_icon'>{news.icon}</span> : null}
          {news.text ? <span className='NewsItem_content NewsItem_text'>{news.text}</span> : null}
          {news.subtext ? <span className='NewsItem_content NewsItem_subtext'>{news.subtext}</span> : null}
        </li>))
      }
    </ul>
  )
}