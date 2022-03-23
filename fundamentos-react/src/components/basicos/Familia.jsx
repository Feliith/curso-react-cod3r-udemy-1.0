import React, { useState, cloneElement } from 'react'
import FamiliaMembro from './FamiliaMembro'

const Familia = (props) => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div>
            {/* <FamiliaMembro nome="Pedro" sobrenome="Souza"/>
            <FamiliaMembro nome="Ana" sobrenome="Marques"/>
            <FamiliaMembro nome="Gustavo" sobrenome={click ? "" : "Felipe"}/>
            <button onClick={handleClick}>Trocar</button>

            <h2>Família:</h2>
            <FamiliaMembro nome="Fernanda" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Felicity" {...props} />
            <FamiliaMembro nome="Paula" sobrenome={props.sobrenome} /> */}
            {
                React.Children.map(props.children, (child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}

export default Familia