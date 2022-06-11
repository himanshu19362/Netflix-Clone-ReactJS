import React, { useState } from 'react'
import './FAQItem.css'

function FAQ_Item(props) {

  const [textShowing , setTextShowing] = useState(false)

  const onDescriptionClick = ()=>{
    setTextShowing(!textShowing)
  }

  return (
    <div className='faq-item'>
        <div className='item'>
            <p>{props.title}</p>
            <button onClick={onDescriptionClick}>+</button>
        </div>
        {textShowing && <div className='item-description'>
          <p>{props.text}</p>
        </div>
        } 
        
    </div>
  )
}

export default FAQ_Item