import React from 'react'
import './test.scss'
const Test = () => {
    const [btn, setBtn] =React.useState(Boolean)
  return (
    <div className='test'>
        <div className={` ${btn===true?'animate':'test-container'} `}>
            Matthew
        </div>
        <div className="test-button">
            <button onClick={()=> setBtn(false)}>left</button>
            <button onClick={()=>setBtn(true)}> right</button>
        </div>
    </div>
  )
}

export default Test