import React ,{useState} from 'react'
import Dice from './Dice'
import "./Dice.css"

function RollDice({sides}) {
    const[state, setState]=useState({
        dice1:"one",
        dice2:"three",
        rolling:false,
        totalScore:4
    })

    const{dice1,dice2,rolling,totalScore}=state
    const roll=()=>{
   const newDice1=sides[Math.floor(Math.random()*sides.length)]
   const newDice2=sides[Math.floor(Math.random()*sides.length)]
   const score1=Object.values(newDice1) //[3]
   const score2=Object.values(newDice2) //[4]

   setState({
    dice1:Object.keys(newDice1),
    dice2:Object.keys(newDice2),
    rolling:true,
    totalScore:score1[0]+score2[0]
   });

   setTimeout(()=>{
    setState((prevState)=>({...prevState,rolling:false}))
   },1000)
    }
  return (
    <>
    <div className='rolled-dice'>
        <div className='rolldice-container'>
        <Dice face={String(dice1)} rolling={rolling}/>
      <Dice face={String(dice2)} rolling={rolling}/>
        </div>
        <div className='button'> 
        <button onClick={roll} disabled={rolling}>
            {rolling?"Rolling":"Roll"}
        </button>
        <h2> Total Score: {totalScore}</h2>
        </div>
    </div>
     
 
    </>
  )
}

RollDice.defaultProps={
    sides:[
        {one:1},
        {two:2},
        {three:3},
        {four:4},
        {five:5},
        {six:6}
    ]
}

export default RollDice
