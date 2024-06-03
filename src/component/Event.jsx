import React, { useState } from 'react'

const Event = () => {
 
function handleClick() {
    alert('Hello')
}
  return (
    <button onClick={handleClick}>Click This</button>
  )
}

export default Event