import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = () => {

    const [a, b] = [1, 2]

    const [nomeLet, setNome] = useState('?')
    const [idadeLet, setIdade] = useState(0)
    const [nerdLet, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span><strong>Nome:</strong> {nomeLet} &nbsp;</span>
                <span><strong>Idade:</strong> {idadeLet} &nbsp;</span>
                <span><strong>Burro?</strong> {nerdLet ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}

export default IndiretaPai
