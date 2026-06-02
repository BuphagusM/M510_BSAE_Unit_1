import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Articles from './pages/Articles'
import ArticlesFilter2 from './pages/ArticlesFilter2'
import Warnings from './pages/Warnings'
import Settings from './pages/Settings'
import NotFound from './components/NotFound'
import './App.css'

// Hauptkomponente – definiert das Layout und alle Routen
function App(): React.ReactElement {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar wird auf jeder Seite angezeigt */}
        <Sidebar />

        {/* Hauptinhalt – wechselt je nach aktiver Route */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/artikel" element={<Articles />} />
            <Route path="/artikel2" element={<ArticlesFilter2 />} />
            <Route path="/warnungen" element={<Warnings />} />
            <Route path="/einstellungen" element={<Settings />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all für unbekannte URLs */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
