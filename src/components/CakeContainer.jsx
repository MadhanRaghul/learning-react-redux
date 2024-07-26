import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../redux/cakeSlice'

const CakeContainer = () => {
  const [count, setCount] = useState(0)
  console.log(count)

  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of cakes: {numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Buy cake</button> <br />
        <input type="number" onChange={(e) => setCount(parseInt(e.target.value))} />
        <button onClick={() => dispatch(restocked(count))}>Restock</button>
    </div>
  )
}

export default CakeContainer