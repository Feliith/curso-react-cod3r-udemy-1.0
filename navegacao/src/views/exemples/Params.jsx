import React from 'react'

import { useParams } from 'react-router-dom'

const Params = () => {

    const { id } = useParams()

    return (
        <div className='Params'>
            <h1>Parâmetros</h1>
            <p>Valor: {id}</p>
        </div>
    )
}

export default Params