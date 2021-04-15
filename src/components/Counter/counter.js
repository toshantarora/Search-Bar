import React, {useEffect, useState} from 'react'

const Counter = () => {
   
    const INITIAL_COUNTER = () => Number(window.localStorage.getItem('count') || 0)
    const [count, setCount] = useState(INITIAL_COUNTER);
    useEffect(() => {
       window.localStorage.setItem('count', count)
    },[count])
    const addIncrement = () =>{
        setCount(count + 1);
    }

    const subDecrement = () =>{
        setCount(count - 1);
    }
    return (
        <div>
        <button onClick={addIncrement}>{count}</button>
        <button onClick={subDecrement}>{count }</button>
        </div>
    )
}

export default Counter
