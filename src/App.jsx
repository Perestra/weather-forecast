import React, { useState } from 'react'
import styles from './App.module.scss';
import axios from 'axios';

import SearchInput from 'components/SearchInput/SearchInput';
import CurrentForecast from 'components/CurrentForecast/CurrentForecast';
import TodayForecast from 'components/TodayForecast/TodayForecast';
import WeatherConditions from 'components/WeatherConditions/WeatherConditions';
import DaysForecast from 'components/DaysForecast/DaysForecast';
import WelcomeMessage from 'components/WelcomeMessage/WelcomeMessage';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const App = () => {

  const [location, setLocation] = useState('')

  const [data, setData] = useState({})
  const [error, setError] = useState('')

  const keyAPI = '7611480c0e5045a889712218230407'
  const days = '10'
  const lang = 'pt'

  const getForecast = (e) => {
    e.preventDefault()

    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${keyAPI}&q=${location}&days=${days}&lang=${lang}`)
      .then(res => {
        setError('')
        setData(res.data)
      })
      .catch(err => {
        setError(err.message)
      })
      .finally(() => {
        setLocation('')
      }); 
  }
  return (
    <div className={ styles.app }>
      <header className={ styles.app__header }>
        <SearchInput 
          onSubmit={getForecast}
          value={location}
          setLocation={setLocation}
          type='text' 
          placeholder='Busque por cidade' 
          lastUpdated={ data.current?.last_updated }
        />
      </header>
      {Object.keys(data).length === 0? <WelcomeMessage /> :
        error !== ''? <ErrorMessage /> :
          <main className={ styles.app__main }>
            <div className={ styles.app__currentForecast }>
              <CurrentForecast
                location= { data.location }
                current= { data.current }
                day= { data.forecast?.forecastday[0].day }
              />
              <TodayForecast 
                hour={data.forecast?.forecastday[0].hour}
              />
              <WeatherConditions 
                current={ data.current } 
                astro={ data.forecast?.forecastday[0].astro }
              />
            </div>
            <div className={ styles.app__daysForecast }>
              <aside className={ styles.app__aside }>
                <DaysForecast 
                  days= { days }
                  forecastday={ data.forecast?.forecastday }
                />
              </aside>
            </div>
          </main>}
    </div>
  )
}

export default App