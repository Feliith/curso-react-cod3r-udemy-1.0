import React from 'react'

const FamiliaMembro = (props) => {

    const lastNameDefault = props.sobrenome || "Silva"

    return (
        <div>
            {/* {props.nome} <strong>{props.middlename}</strong> <strong>{lastNameDefault}</strong> */}
            {props.nome}
            <strong>{props.middlename}</strong>
            <strong>{props.sobrenome}</strong>
        </div>
    )
}

export default FamiliaMembro