import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './index.css';
import Jobs from './pages/Jobs'
import Companies from './pages/Companies'
import Blog from './pages/Blog'



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
