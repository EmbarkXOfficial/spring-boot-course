import { useState } from 'react'
import './App.css'
import Products from './components/products/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/shared/Navbar'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/products' element={ <Products />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/contact' element={ <Contact />}/>
      </Routes>
    </Router>
  )
}

export default App
