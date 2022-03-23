import React from 'react'

export default props => {

    let {min, max} = props

    let random = parseInt(Math.random() * (max - min + 1) + min)

    return (
        <div>
            <h2>Número aleatório:</h2>
            <h3>Número mínimo: {min}</h3>
            <h3>Número máximo: {max}</h3>
            <h3><strong>{random}</strong></h3>
        </div>
    )
}
