import React, { useState } from 'react'

const IndiretaFilho = (props) => {

    const cb = props.quandoClicar

    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    
    const gerarNerd = () => Math.random() > 0.5

    const [valor, setValor] = useState('?')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div>
            <input type="text" value={valor} onChange={quandoMudar} />
            <button 
            style={{padding: '4px'}}
            onClick={_ => cb(valor, gerarIdade, gerarNerd)}>
                Fornecer Informações [ Filho ]
            </button>
        </div>
    )
}

export default IndiretaFilho