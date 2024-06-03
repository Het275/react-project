import React from 'react'

function InputContainer({input, handleChange, addTodos}) {
  return (
    <div className='input-container'>
        <input type="text" value={input} onChange={handleChange}/>
        <button onClick={addTodos}>+</button>
    </div>
  )
}

export default InputContainer