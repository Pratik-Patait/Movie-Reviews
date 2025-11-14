import './App.css'
import NavBar from './componets/Navbar/NavBar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Route, Navigate, Routes } from 'react-router-dom'
import ThemeProvider from './providers/ThemeProvider'
import AuthProvider from './providers/AuthProvider'
import AllMovies from './pages/AllMovies/AllMovies'

function App() {

  return (
    <div>
      <ThemeProvider>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route
          path='home'
          element = {
            <Home/>
          }
        >
          <Route path='movies' element={<AllMovies/>}/>
          
        </Route>
      </Routes> 
      </AuthProvider>
      </ThemeProvider>      
    </div>
  )
}

export default App
