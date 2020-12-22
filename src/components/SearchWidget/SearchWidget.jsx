import AdWidget from '../AdWidget/AdWidget';
import './SearchWidget.css';

/**
 * Компонент «SearchWidget»: строка поиска с рекламным банером
 */

export default function SearchWidget() {
  return (
    <div className="SearchWidget">
      <div className='SearchWidget-Container'>
        <div className="SearchWidget-LogoContainer">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABTCAMAAAClOGXpAAAAllBMVEX///8AAAD/AAD/RkbZ2dn/lpaYmJh+fn74+Pji4uJnZ2eEhIQGBgZgYGBVVVXIyMgmJib/YmL/VVW8vLx2dnalpaWRkZFQUFCvr6/q6upISEj/7u7x8fG2traenp7/nJxBQUEwMDD/MjL/dHT/TEz/oqIbGxv/g4P/q6v/trb/fHz/QED/zs7/ior/Ojr/xMT/3d3/JiZ/7549AAAEsElEQVRoge2Y3XqiMBCGsUsVpKJVRFBBrda2a7vt3v/NLcnkZ4YExbbPloN8R2aIyUtmMpngeU5OTk5OTk5OTj+n1ctmfy/0+6dhlF4ebpBOP40j9HpD9eungUBvN53k2kuch8N0+tAZrkeA+vPOW5uucK0A61Y0b7vCdeBYb7LZFa4PcKJqd4UL9uKraneFC6JLtzvCtaLR1Rmud871og0d4XqshVdXuDjGzUfNILkCJg83ai0kMmye9dNyjC22f6OnszJNy2Jd41rZufweUyieLFgjlf2GPaoEMYRLYSy1LWHtWHbgT2fymR/LUXbyXS5z3UmuEWv1yTxIkR4i09alMg5Yc4hfKrYOlYFtc86Pn+OaYbOaHHOBH3zxZEHGEVaI+/dv5MqhfXck70+4RnjtRnQcEXSQJ54/yTXzK4Ux4eIPjtVr5xP2axIYXCRshdNT1q2o/iFGgbx6/0kuWPQh5gq1N0h0Iy7+HnKfAJYM9+woxz93Dn2GK0KTDpG/NNeYk+RgnsNqqelV7oBze/NdXMEWBe8MOVJzLfFrcF9L52GJslBlii9y8b8c16ghVkZxwXKRHmpQrD0Fu4orNLi4X0aiz3qnA0xxbbHj5ngL1CQuHRtY701LrqF+hLmGOKaBoU+4ILvJMIqb3OjJipVdh/ZPT2+HllysdcwNrgXpxENpQLj4EqrzqUdeowlMqQUXe9PJus4FnisIV4K5Cj6kfL5uDi+m1elqLr7vdgYXyl7qL0PMxfefPANE2M+buOTxbecqxiDiIr4w26DOBRMdJ6DdXY0r4dl9oqaFvanqClNTwDmdTn+NOodIcuVsyoVn56Iaaa7RhHLAJiB1GtGHPo2M/djAxRqxwTU+zwXS9WBB3W5or6tpsy60coXaQ5e4Ys0FjtUl0QUuyPlwt23JxQFSgwscE/VTpExzDWDV8pZcT6gIM/O9Lwp4sh95os4auGz5G/YjFGey9LoUX7imaHkODdCAhh9tCyDyREo6QPfC0p0JaunHq7iGaHhjP9oWQHAFKORk99LSnYmUYO24cFo1uVTeNLm8EpNDvk8t3Ss9cyzb969mLh4nIn1hrpxX9YMzXB7fklth5VwjS3dPLtd1dQ4PDHne4nN72TSR4oKCfobGtNcT7zqntueK0NhmndPT92aTC45IcRbNmxPFg86p7bkWeDjMNcOrYecqUAz6jQH2inJqa64cxwjh4ucmumZbuLwdcl5jfT9FObU11xyR1O5D4EhdugSFwTVG2QEcqTeKjIAPkiTacsUkKgiXOLskWNm7q9+HxOYQxzftHsml2+Oc2o7LT+BKPRCKuF+2UeKLobl2ZZGViN/8PoFPrl48C/2C9YHZgvpyteCy1QxckCyDXc0cGVziugE+q33oAIfArRZ9Xv06l7eeUDO9d6AFS9C4SrBlaE5VXCf892u56De7o7BCvUp7iJFL1B1Ynw/T6fTwhLDAtIff4TKuJKulaBHHi0xw7WKiLeGqQlBOo2x99m+1hcOqpZtBKj5KRfYbbjtxrtodJqNclda+79NvrmcVhFd1b+Sq1SZzg+v/y3FdJ8d1nfykOnxqDOPKlDTfT52cnJycnEz9A7/+R5LKudc8AAAAAElFTkSuQmCC" alt="logoYandex" />
        </div>
        <div>
          <ul className="SearchWidget-Types">
            <li className="SearchWidget-Types_item">Видео</li>
            <li className="SearchWidget-Types_item">Картинки</li>
            <li className="SearchWidget-Types_item">Новости</li>
            <li className="SearchWidget-Types_item">Карты</li>
            <li className="SearchWidget-Types_item">Маркет</li>
            <li className="SearchWidget-Types_item">Переводчик</li>
            <li className="SearchWidget-Types_item">Эфир</li>
            <li className="SearchWidget-Types_item">ещё</li>
          </ul>
          <form>
            <input type="text"></input>
            <button type="submit">Искать</button>
          </form>
        </div>
      </div>
      <AdWidget img='http://placehold.it/600x100' />
    </div>
  )
}