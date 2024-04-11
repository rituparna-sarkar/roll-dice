import React from 'react'
import './Dice.css'

function Dice({face,rolling}) {

   
  return (
    <div className='diceRoll'>
      <i className={` dice fas fa-dice-${face} ${rolling && "shaking"}`}  />
      
    </div>
  )
}

export default Dice;
