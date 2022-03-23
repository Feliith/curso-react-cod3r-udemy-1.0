import React from 'react'

const Display = (props) => {
  return (
    <div>
        <h2>Contador</h2>
        <p>Valor: {props.numero}</p>
    </div>
  )
}

export default Display