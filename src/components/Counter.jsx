import React, { useState } from 'react'

const Counter = () => {

const[count, setCount] = useState(0)

const Increment = () => {
    setCount(prevCount => prevCount + 1)
}
const Decrement = () => {
    setCount(prevCount => prevCount - 1)
}
const Reset = () => {
    setCount(0)
}

  return (
    <div>
        <button className='bg-gray-500 text-white font-semibold border-2 m-2 rounded p-2'  onClick={Increment}>Increment</button>
        <p className='text-emerald-500 font-bold'>Count: {count}</p>
        <button className='bg-gray-500 text-white font-semibold border-2 m-2 rounded p-2'  onClick={Decrement}>Decrement</button>
        <button className='bg-gray-500 text-white font-semibold border-2 m-2 rounded p-2'  onClick={Reset }>Reset</button>
    </div>
  )
}

export default Counter