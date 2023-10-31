import React, { useState } from 'react'

function Count() {
  const [num, setNum] = useState(0)
  const increase = () => {
    setNum(num + 1)
  }
  const decrease = () => {
    setNum(num - 1)
  }

  return (
    <>
      <h1>Count 입니다.</h1>
      <h2>여기서는 useState 를 공부합니다.</h2>

      <button onClick={increase}>+1</button>
      <input type="text" value={num} />
      <button onClick={decrease}>-1</button>
    </>
  )
}

export default Count
