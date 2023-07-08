import React from 'react'
import styles from './DaysForecast.module.scss'

import DailyWeather from 'components/DailyWeather/DailyWeather';

const DaysForecast = ({ forecastday, days }) => {

    function formatDate(date) {
        const dateSplited = date.split('-')
        const newDate = `${dateSplited[2]}/${dateSplited[1]}`
        return newDate
    }

  return (
    <div className={ styles.forecast }>
        <h3>{`Previsão para ${days} dias`}</h3>
        <nav className={ styles.forecast__nav }>
            <ul className={ styles.forecast__ul }>
                { forecastday?.map( (item, index) =>
                    <li key={index}>
                        <DailyWeather 
                            date={formatDate(item.date)}
                            src={item.day.condition.icon}
                            text={item.day.condition.text}
                            maxTemp={Math.floor(item.day.maxtemp_c)}
                            minTemp={Math.floor(item.day.mintemp_c)}                     
                        />                
                    </li>   
                )}
            </ul>
        </nav>
    </div>
  )
}

export default DaysForecast