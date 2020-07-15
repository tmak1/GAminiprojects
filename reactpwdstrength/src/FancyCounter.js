import React, { useState } from 'react'

export default function FancyCounter() {

    const [counter, setCounter] = useState(0) // initial state is 0
    // const [ingredient, setIngredient] = useState(0) for a second variable inside state
    
    const handleIncrement = evt => {
        setCounter(prevCounter => prevCounter + 1)
    }
    const handleDecrement = evt => {
        setCounter(prevCounter => prevCounter - 1)
    }
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <span>{counter}</span>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}   