import React from 'react'
import styles from './ErrorMessage.module.scss'

const ErrorMessage = () => {
  return (
    <main className={ styles.main }>
        <section className={ styles.main__section }>
            <div className={ styles.main__codeError }>
                <h1>4</h1>
                <img src="http://cdn.weatherapi.com/weather/64x64/day/119.png" alt="nublado" />
                <h1>4</h1>
            </div>
            <span className={ styles.main__msgError }>Oops! Desculpe, não consegui encontrar este local... Está meio nublado por aqui</span>
        </section>
    </main>
  )
}
// 
export default ErrorMessage