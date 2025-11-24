
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountryDetail from './pages/CountryDetail'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <>
    <NavBar />
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/country/:code' element={<CountryDetail/>}/> 
      
      
    </Routes>
    </>
  )
}

export default App
