export function reducer(state, action) {
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