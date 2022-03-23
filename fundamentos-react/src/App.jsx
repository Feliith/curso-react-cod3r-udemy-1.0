import './App.css'

import React from "react"

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'
import MegaAlt from './components/mega/MegaAlt'

export default () => (
    <div id="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#13.2 - Mega-Sena Alternativo">
                <MegaAlt />
            </Card>

            <Card titulo="#13 - Mega-Sena" color="#118038">
                <Mega />
            </Card>

            <Card titulo="#12 - Contador">
                <Contador numeroInicial={10} />
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#d67dc8">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#e2c0d2">
                <IndiretaPai />
            </Card>

            <Card titulo="#9 - Comunicação Direta" color="#8e7bd8">
                <DiretaPai />
            </Card>

            <Card titulo="#8 - Renderização Condicional" color="#018107">
                <ParOuImpar numero={2} />
                <UsuarioInfo usuario={{nome: 'Fernando'}} />
                <UsuarioInfo email={{email: 'fer@nando.com'}} />
            </Card>

            <Card titulo="#7 - Produtos" color="#64d5a5">
                <TabelaProdutos />
            </Card>

            <Card titulo="#6 - Repetição" color="#620893">
                <ListaAlunos />
            </Card>

            <Card titulo="#5 - Componente com filhos" color="#3f01b7">
                <Familia middlename="Silva " sobrenome="Rosa">
                    <FamiliaMembro nome="Fernanda " />
                    <FamiliaMembro nome="Felicity " />
                    <FamiliaMembro nome="Paula " />
                </Familia>
            </Card>

            <Card titulo="#4 - Desafio aleatório" color="#7aa44b">
                <Aleatorio 
                    min={1} 
                    max={10} />
            </Card>

            <Card titulo="#3 - Fragmento" color="#0a3497">
                <Fragmento />
            </Card>
            
            <Card titulo="#2 - Com parâmetro" color="#9b18ae">
                <ComParametro
                    alune="Pedro Silva"
                    nota={6} />
            </Card>

            <Card titulo="#1 - Primeiro Componente ;(">
                <Primeiro />
            </Card>
        </div>

    </div>
)
