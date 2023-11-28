import React from 'react'
import Navbar from './componants/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { QuoteProvider } from './componants/quotes/QuoteContext'
import { WeatherProvider } from './componants/weather/weatherContext'
const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<QuoteProvider>
        <WeatherProvider>
        <Home/>
        </WeatherProvider>
      </QuoteProvider>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </Router>
  )
}

export default App
