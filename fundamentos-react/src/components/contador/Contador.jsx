import React, { Component } from 'react'

import Botoes from './Botoes'
import Display from './Display'
import Passo from './Passo'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    render () {
        return (
            <div>
                <Display numero={this.state.numero}/>
                <Passo passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes inc={this.inc} dec={this.dec} />
            </div>
        )
    }
}

export default Contador
