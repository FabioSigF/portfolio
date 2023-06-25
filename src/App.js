import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}
