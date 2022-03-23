import React from 'react'

const Passo = (props) => {
  return (
    <div>
        <label htmlFor="passo">Passo: </label>
        <input type="number" id="passo" value={props.passo} onChange={props.setPasso} />
    </div>
  )
}

export default Passo