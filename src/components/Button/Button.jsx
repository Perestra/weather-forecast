import React from 'react'
import styles from './Button.module.scss'

const Button = ({ type, value, icon }) => {
  return (
    <div className={ styles.btn }>
      <button 
        className={ styles.btn__content }
        type={ type }
        value={ value }
      >
        { icon }
      </button>
    </div>
  )
}

export default Button