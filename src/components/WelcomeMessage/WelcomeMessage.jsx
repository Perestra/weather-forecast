import React from 'react'
import styles from './WelcomeMessage.module.scss'

const WelcomeMessage = () => {
  return (
    <main className={ styles.main }>
      <section className={ styles.main__section }>
        <div className={ styles.main__message }>
          <h1>Descubra a temperatura do local que deseja!</h1>
        </div>
      </section>
    </main>
  )
}

export default WelcomeMessage