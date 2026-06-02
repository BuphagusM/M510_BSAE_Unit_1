import React from 'react'
import { NavLink } from 'react-router-dom'

// Sidebar-Navigation – wird auf allen Seiten angezeigt
// TODO: Weitere Navigationspunkte (Artikel, Warnungen, Einstellungen) hinzufügen
function Sidebar(): React.ReactElement {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-icon">📦</span>
        <span className="sidebar-title">Lagerverwaltung</span>
      </div>

      <nav>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-icon">🏠</span>
              Dashboard
            </NavLink>
            <NavLink
              to="/artikel"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-icon">📦</span>
              Artikel
            </NavLink>
            <NavLink
              to="/artikel2"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-icon">📦</span>
              Artikel Filter 2
            </NavLink>
            <NavLink
              to="/warnungen"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-icon">⚠️</span>
              Warnungen
            </NavLink>
            <NavLink
              to="/einstellungen"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-icon">⚙️</span>
              Einstellungen
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
