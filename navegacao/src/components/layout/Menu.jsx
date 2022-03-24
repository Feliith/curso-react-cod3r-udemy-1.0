import React from 'react'
import './Menu.css'

import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <aside className='Menu'>
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="about">Sobre</Link>
            </li>
            <li>
              <Link to="params/01">Parâmetros #1</Link>
            </li>
            <li>
              <Link to="params/02">Parâmetros #2</Link>
            </li>
            <li>
              <Link to="naoExiste">Não existe</Link>
            </li>
          </ul>
        </nav>
    </aside>
  )
}

export default Menu