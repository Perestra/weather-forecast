import React from 'react'
import styles from './HourForecast.module.scss'

const HourForecast = ({ time, icon, text, temp }) => {

    function timePeriod(datetime) {
        const timeSplited = datetime.split('-')      
        const getHour = timeSplited[2].split(' ')
        const hour = getHour[1].toString()
        
        if(hour >= '12:00' && hour <= '23:00' ) {
            return `${hour} PM`
        } else {
            return `${hour} AM`
        }
    }

  return (
    <div className={ styles.forecast }>
        <span>{ timePeriod(time) }</span>
        <img src={ icon } alt={`O clima é: ${ text }`} />
        <span>{ `${temp}°` }</span> 
    </div>
  )
}

export default HourForecast