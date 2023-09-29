import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { createContext, useState } from 'react'
import ReactSwitch from "react-switch"



export const ThemeContext = createContext(null)





function App() {
  const { user } = useAuthContext()
 

  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
      
      </div>
    <div className="App" id={theme}>
      <BrowserRouter>
        <Navbar />
       
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    <div className="switch">
      <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
             <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
             
             </div>
    </ThemeContext.Provider>
  );
}

export default App;