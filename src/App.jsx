import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'
import NavBar from './components/NavBar'

function App() {



  return (
    <main className="main-content">
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  )
}

export default App
