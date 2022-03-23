import "./Mega.css"
import React, { useState } from 'react'

const Mega = (props) => {

    function randomNumber(min, max, array) {
        const random = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(random) ?
            randomNumber(min, max, array) :
            random
    }

    function getNumbers(quant) {
        const numbers = Array(quant)
            .fill(0)
            .reduce((nums) => {
                const newNumber = randomNumber(1, 60, nums)
                return [...nums, newNumber]
            }, [])
            .sort((n1, n2) => (n1 - n2))

        return numbers
    }

    const [quant, setQuant] = useState(props.quant || 6)
    const initialNumbers = Array(quant).fill(0)
    const [numbers, setNumbers] = useState(initialNumbers)

    return (
        <div className="Mega">
            <h2>Gerar Mega</h2>
            <div className="numeros">{numbers.map((item, index) => {
                return (
                    <span>{numbers[index]}</span>
                )
            })}</div>
            <div className="input-quant">
                <label>Quantidade de números:</label>
                <input min="6" max="13" type="number" value={quant} onChange={e => setQuant(+e.target.value)} />
            </div>
            <button onClick={_ => setNumbers(getNumbers(quant))}>
                Gerar números
            </button>
        </div>
    )
}

export default Mega