import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {
  

  return (
    <>
    <div className="d-flex flex-column min-vh-100">

      <main className="flex-grow-1">
        <AppRoutes />
      </main>

    </div>
    </>
  )
}

export default App
