import React from 'react'
import DiretaFilho from './DiretaFilho'

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho nome="Carlos" idade={20} bool={true} />
            <DiretaFilho nome="Ana" idade={17} bool={false} />
        </div>
    )
}

export default DiretaPai