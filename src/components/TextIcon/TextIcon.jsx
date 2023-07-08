import React from 'react'

const TextIcon = ({ className, text, icon }) => {
  return (
    <div className={ className }>
        { icon }
        <p>{ text }</p>
    </div>
  )
}

export default TextIcon