import React from 'react'
import styles from './ConditionForecast.module.scss'

import TextIcon from 'components/TextIcon/TextIcon'

const ConditionForecast = ({ text1, icon1, span1, text2, icon2, span2 }) => {
  return (
    <div className={ styles.conditions }>
      <div className={ styles.conditions__info }>
        <TextIcon className={ styles.conditions__textIcon } text={ text1 } icon={ icon1 } />
        <span>{ span1 }</span>
      </div>   
      <div className={ styles.conditions__info }>
        <TextIcon className={ styles.conditions__textIcon } text={ text2 } icon={ icon2 } />
        <span>{ span2 }</span>
      </div>
    </div>
  )
}

export default ConditionForecast