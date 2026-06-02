//NotFound.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
const parsedUrl = "https://" + window.location.hostname + window.location.pathname


  return (
    <div className="not-found">
      <h1>404 - Seite nicht gefunden</h1>
      <p>Die angeforderte Seite "{parsedUrl}" existiert nicht.</p>
      <Link to="/" className="home-link">Zurück zum Dashboard</Link>
    </div>
  )
}

export default NotFound 