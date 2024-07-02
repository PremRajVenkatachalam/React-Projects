import React, { useState } from 'react'
import './App.css'

const Advice = () => {

    const[advice,setAdvice] = useState("Click Button")
    let[Count,setCount] = useState(0)

    async function handleAdvice(){
        const url = await fetch("https://api.adviceslip.com/advice");
        const data = await url.json();
        setAdvice(data.slip.advice)
        setCount(Count + 1);
    }

  return (
    <>
    <div className='container'>
       <h2> {advice} </h2>
       <button onClick={handleAdvice}>Get Advice</button>
       <p>
        You have read <b>{Count}</b>
       </p>
    </div>
    </>
  )
}

export default Advice;