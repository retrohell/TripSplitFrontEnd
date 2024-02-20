import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import SignIn from './views/SignIn'
import Home from './views/Home'

function App() {
  return <>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Home />} />
      
    </Routes>
    <Outlet />
  </>
}

export default App
