import React, { useState } from 'react'

function ChildUpdater({ name, increment, decrement }) {
  const [count, setCount] = useState(0) // count is a variable, and setCount is a function. setCount used to update the count value.

  console.log(`Rendering "ChildUpdater-${name}", count: ${count}`)

  return (
    <div className="child-comp">
      Local Counter: {count}
      <br />
      {/** here onClick event handler take a function, when click on the button then will execute the function*/}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br />
      <h3>{name} Parent Updater</h3>

      {/*
      here we need to know that, we don't call the increment/decrement fuction imediately.
      we make sure that when we click on the button then function will call.
      So for this, we need to declare as 'increment' that means when we click on button then function will call.
      If we declare as 'increment()', so our function will call imediately that means first render time.
      */}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default React.memo(ChildUpdater)
