import React from 'react'
import styles from './CurrentForecast.module.scss'

import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import TextIcon from 'components/TextIcon/TextIcon'

const CurrentForecast = ({ location, current, day }) => {
  return (
    <section className={ styles.current }>
      <div className={ styles.current__forecast }>
        <div className={ styles.current__location }>
          <h1>{ location?.name }</h1>
          <span>{ `Chance de chuva: ${Math.floor(day?.daily_chance_of_rain)}%` }</span>
        </div>
        <div className={styles.current__temperature}>
          <h1>{ `${Math.floor(current?.temp_c)}°` }</h1>
          <div className={ styles.current__maxMin }>
            <TextIcon
              className={ styles.current__textTemp }
              icon={ <FiChevronUp className={ styles.current__iconTemp } /> }
              text={ `${Math.floor(day?.maxtemp_c)}°` }
            />
            <TextIcon
              className={ styles.current__textTemp }
              icon={ <FiChevronDown className={ styles.current__iconTemp } /> }
              text={ `${Math.floor(day?.mintemp_c)}°` }
            />
          </div>
        </div>
      </div>
      <div className={ styles.current__infoWeather }>
        <img src={ current?.condition.icon } alt={ `O clima é: ${current?.condition.text}` } />
        <p>{ current?.condition.text }</p>
      </div>
    </section>
  )
}

export default CurrentForecast