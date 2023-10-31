import React, { useState } from 'react'

function Input() {
  const [txt, setTxt] = useState('')
  const onChange = (e) => {
    setTxt(e.target.value)
  }

  return (
    <>
      <h1>Input 입니다.</h1>
      <h2>여기서는 useState 를 공부합니다.</h2>

      <input type="text" value={txt} onChange={onChange} />
      <p className="">{txt}</p>
    </>
  )
}

export default Input
