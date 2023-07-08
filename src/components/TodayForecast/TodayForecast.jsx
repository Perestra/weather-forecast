import React from 'react'

import styles from './TodayForecast.module.scss'
import 'swiper/css';
import 'swiper/css/free-mode';

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper/modules";
import HourForecast from 'components/HourForecast/HourForecast';

const TodayForecast = ({ hour }) => {
  return (
    <section className={ styles.forecast }>
      <h3>Previsão para hoje</h3>
      <nav>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          breakpoints={{
            300: {
              slidesPerView: 3
            },
            600: {
              slidesPerView: 4
            },
            900: {
              slidesPerView: 5
            },
            1110: {
              slidesPerView: 7
            },
            1300: {
              slidesPerView: 8
            },
            1500: {
              slidesPerView: 9
            },
          }}
        >
          { hour?.map( (item, index) => 
              <SwiperSlide key={index}>
                <HourForecast
                  time={ item.time }
                  icon={ item.condition.icon }
                  text={ item.condition.text }
                  temp={ Math.floor(item.temp_c) }
                />
              </SwiperSlide>
          )}
        </Swiper>
      </nav>
    </section>
  )
}

export default TodayForecast