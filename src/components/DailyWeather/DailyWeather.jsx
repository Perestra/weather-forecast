import React from 'react'
import styles from './DailyWeather.module.scss'

const DailyWeather = ({ date, src, text, maxTemp, minTemp }) => {
  return (
    <div className={ styles.daily }>
        <span>{ date }</span>
        <div className={ styles.daily__info }>
            <img src={ src } alt={ `O clima é: ${ text }` } />
            <p>{ text }</p>
        </div>
        <p>{ `${ maxTemp }` }<span className={ styles.daily__span }>{ `/${ minTemp }` }</span></p>
    </div>
  )
}

export default DailyWeather