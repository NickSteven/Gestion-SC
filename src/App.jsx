
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Professeur from './pages/Professeur'
import Salle from './pages/Salle'
import Occuper from './pages/Occuper'
import Audit from './pages/Audit'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/professeurs' element={<Professeur />}></Route>
        <Route path='/salle' element={<Salle />}></Route>
        <Route path='/occuper' element={<Occuper />}></Route>
        <Route path='/audit' element={<Audit />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
