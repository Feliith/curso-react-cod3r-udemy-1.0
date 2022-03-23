import React from 'react'

const DiretaFilho = (props) => {
    return (
        <div style={{margin: '12px 0'}}>
            <strong>Flho:</strong> {props.nome} &nbsp; <strong>Idade:</strong> {props.idade} &nbsp; <strong>Burre?</strong> {props.bool ? 'Sim' : 'Não'}
        </div>
    )
}

export default DiretaFilho