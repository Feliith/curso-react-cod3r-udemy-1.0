import './Card.css'

import React from "react";

export default props => {

    const randomNumber = parseInt(Math.random() * (999999 - 100000)) + 100000
    
    let randomHex = randomNumber

    const estilo = {
        backgroundColor: props.color || `#${randomHex}`,
        borderColor: props.color || `#${randomHex}`
    }

    return(
        <div className='Card' style={estilo}>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}
