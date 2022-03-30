import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
    other: '...',
    cart: [],
    producst: [],
    user: null,
    // focus
    number: 0,
}

function reducer(state, action) {
    switch(action.type){
        case 'add2ToNumber':
            return {...state, number: state.number + 2}

        case 'login':
            return {...state, user: {name: action.name}}

        case 'multiply7':
            return {...state, number: state.number * 7}

        case 'divide25':
        return {...state, number: state.number / 25}

        case 'parseInt':
            return {...state, number: parseInt(state.number)}

        case 'addNum':
            return {...state, number: state.number + action.addNum}

        default:
            return state
    }
}

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
                    value={name}
                    onChange={e => setName(e.target.value)} />

                <div>
                    <button className="btn"
                        onClick={() => dispatch({type: 'add2ToNumber'})}
                    >+2</button>

                    <button className="btn"
                        onClick={() => dispatch({type: 'login', name: name})}
                    >LogIn</button>

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
