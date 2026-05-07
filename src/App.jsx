import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  

  return (
    <>
     {/* <Home/> */}
     <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
