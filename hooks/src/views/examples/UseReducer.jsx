import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import { initialState, reducer } from '../../store'
import { add2ToNumber, login } from '../../store/actions'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const [name, setName] = useState('')
    const [addNum, setAddNum] = useState('0')

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exercise #01" />
            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span> 
                    : <span className="text">Sem usuário</span>}

                <span className="text">{state.number}</span>

                <input type="text" 
                    className="input"
                    placeholder='Nome'
                    value={name}
                    onChange={e => setName(e.target.value)} />

                <div>
                    
                    <button className="btn"
                        onClick={() => login(dispatch, name)}
                    >LogIn</button>

                    <button className="btn"
                        onClick={() => add2ToNumber(dispatch)}
                    >+2</button>

                    <button className="btn"
                        onClick={() => dispatch({type: 'multiply7'})}
                    >x7</button>

                    <button className="btn"
                        onClick={() => dispatch({type: 'divide25'})}
                    >/25</button>

                    <button className="btn"
                        onClick={() => dispatch({type: 'parseInt'})}
                    >ParseInt</button>
                </div>
            </div>
            <div className="center">
                <div>
                    <input type="number"
                        className='input'
                        value={addNum}
                        onChange={e => setAddNum(e.target.value)} />
                    <button className="btn"
                        onClick={() => dispatch({type: 'addNum', addNum: parseInt(addNum)})}
                    >+ {addNum}</button>
                </div>
            </div>

        </div>
    )
}

export default UseReducer
