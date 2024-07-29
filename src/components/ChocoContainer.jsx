import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../redux/chocoSlice'

const ChocoContainer = () => {
    const [late, setLate] = useState(0)

    const numOfChocos = useSelector((state) => state.choco.numOfChocos)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of chocolates: {numOfChocos}</h2>
        <button onClick={() => dispatch(ordered())}>Buy chocolate</button> <br />
        <input type="number" onChange={(e) => setLate(parseInt(e.target.value))} />
        <button onClick={() => dispatch(restocked(late))}>Restock</button>
        
    </div>
  )
}

export default ChocoContainer