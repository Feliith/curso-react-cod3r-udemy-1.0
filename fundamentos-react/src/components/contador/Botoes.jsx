import React from 'react'

const Botoes = (props) => {
  return (
    <div>
        <button 
        style={{padding: '4px 8px', margin: '4px'}}
        onClick={props.dec}>-</button>
        <button 
        style={{padding: '4px 8px', margin: '4px'}}
        onClick={props.inc}>+</button>
    </div>
  )
}

export default Botoes