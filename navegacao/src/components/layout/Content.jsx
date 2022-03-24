import { Routes, Route } from 'react-router-dom'
import React from 'react'
import './Content.css'

import About from '../../views/exemples/About'
import Home from '../../views/exemples/Home'
import Params from '../../views/exemples/Params'
import NotFound from '../../views/exemples/NotFound'

const Content = () => {
  return (
    <main className='Content'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/params/:id" element={<Params />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
  )
}

export default Content