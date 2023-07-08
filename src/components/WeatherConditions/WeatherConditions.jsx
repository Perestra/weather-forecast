import React from 'react'
import styles from './WeatherConditions.module.scss'
import 'swiper/css';
import 'swiper/css/free-mode';

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper/modules";

import { BiWind } from 'react-icons/bi'
import { MdVisibility } from 'react-icons/md'
import { PiThermometer } from 'react-icons/pi'
import { BsFillSunFill, BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs'
import { TbDropletFilled } from 'react-icons/tb'
import { WiHumidity } from 'react-icons/wi'

import ConditionForecast from 'components/ConditionForecast/ConditionForecast';

const WeatherConditions = ({ current, astro }) => {
  return (
    <section className={ styles.forecast }>
        <h3>Condições do clima</h3>
        <nav>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          breakpoints={{
            300: {
              slidesPerView: 2
            },
            900: {
              slidesPerView:3
            },
            1300: {
              slidesPerView: 4
            },
          }}
        >
          <SwiperSlide className={ styles.forecast__content }>
            <ConditionForecast 
              text1='Vento' icon1={ <BiWind className={ styles.forecast__iconCondition } /> } span1={ `${current?.wind_kph} km/h` }
              text2='Visibilidade' icon2={ <MdVisibility className={ styles.forecast__iconCondition } /> } span2={ `${current?.vis_km} km` }
            />
          </SwiperSlide>
          <SwiperSlide className={ styles.forecast__content }>
            <ConditionForecast 
              text1='Sensação' icon1={ <PiThermometer className={ styles.forecast__iconCondition } /> } span1={ `${Math.floor(current?.feelslike_c)}°` }
              text2='Índice UV' icon2={ <BsFillSunFill className={ styles.forecast__iconCondition } /> } span2={ `${current?.vis_km}` }
            />
          </SwiperSlide>
          <SwiperSlide className={ styles.forecast__content }>
            <ConditionForecast 
              text1='Precipitação' icon1={ <TbDropletFilled className={ styles.forecast__iconCondition } /> } span1={ `${current?.precip_mm} mm` }
              text2='Umidade' icon2={ <WiHumidity className={ styles.forecast__iconCondition } /> } span2={ `${current?.vis_km}%` }
            />
          </SwiperSlide>
          <SwiperSlide className={ styles.forecast__content }>
            <ConditionForecast 
              text1='Nascer do sol' icon1={ <BsFillSunriseFill className={ styles.forecast__iconCondition } /> } span1={ `${astro?.sunrise}` }
              text2='Pôr do sol' icon2={ <BsFillSunsetFill className={ styles.forecast__iconCondition } /> } span2={ `${astro?.sunset}` }
            />
          </SwiperSlide>
        </Swiper>
      </nav>
    </section>
  )
}

export default WeatherConditions