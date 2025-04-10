import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'
import NavBar from './components/NavBar'
import { MovieProvider } from './context/MovieContext'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

function App() {



  return (
    <ThemeProvider>
      <LanguageProvider>
        <MovieProvider>
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
        </MovieProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
