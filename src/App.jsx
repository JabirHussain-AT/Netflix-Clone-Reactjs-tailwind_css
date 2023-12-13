import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { VideoProvider } from './context/VedioTitleContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < VideoProvider >
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
      </VideoProvider>
    </>
  )
}

export default App
