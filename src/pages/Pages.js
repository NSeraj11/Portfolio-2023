import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import ContactMe from './ContactMe'
import Portfolio from './Portfolio'

function Pages() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </div>
  )
}

export default Pages