import React from 'react'
import styles from './SearchInput.module.scss'

import { BsSearch } from 'react-icons/bs'
import Button from 'components/Button/Button'

const SearchInput = ({ onSubmit, value, setLocation, type, placeholder, lastUpdated }) => {  
  return (
    <>
      <div className={ styles.content }>
          <form className={styles.content__form} onSubmit={ onSubmit } >
              <input 
                className={ styles.content__input } 
                type={ type } 
                value={ value } 
                placeholder={ placeholder } 
                onChange={ e => setLocation(e.target.value) }    
              />
              <Button 
                type='submit'
                icon={ <BsSearch className={ styles.content__icon } /> }
              />
          </form>
      </div>
      <span className={ styles.content__lastUpdated }>Atualizado em <strong>{ lastUpdated }</strong></span>
    </>
  )
}

export default SearchInput