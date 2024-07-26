import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../redux/cakeSlice'

const CakeContainer = () => {
  const [count, setCount] = useState('')
  console.log(count)

  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of cakes: {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Buy cake</button> <br />
        <input type="text" onChange={(e) => (setCount(event.target.value))} />
        <button onClick={() => dispatch(restocked(1))}>Restock</button>
    </div>
  )
}

export default CakeContainer