// 01-simple
// here useState is not destructure, here import useState function from 'react'.
import React, { useState } from 'react' // React is an 'export default' and {useState} is an export.

function SimpleComponent() {
  const [count, setCount] = useState(0) // return value is an array, and destructuring the count and setCount.

  console.log('Rendering SimpleComponent, count:', count)

  console.log('React: ', React)
  console.log('useState: ', useState)

  return (
    <>
      <header>
        <h1>Simple Counter</h1>
      </header>

      <main>
        Counter: {count}
        <br />
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </main>
    </>
  )
}

export default SimpleComponent

/**
With react we have some promises/contracts
1. We will not change the props values from child component.
2. If we need to change state then we will call by setter method.
3. We will define useState() in the top level of function component.
*/