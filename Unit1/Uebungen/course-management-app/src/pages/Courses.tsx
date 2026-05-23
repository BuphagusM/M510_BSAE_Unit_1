import React from 'react'
import { coursesData } from '../data/mockData'

function Courses(): React.ReactElement {
    return (
        <div>
            <h1 className="page-title">Kurse</h1>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Kurstitel</th>
                            <th>Datum</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coursesData.map(course => (
                            <tr key={course.id}>
                                <td>{course.title}</td>
                                <td>{new Date(course.date).toLocaleDateString('de-DE')}</td>
                                <td>
                                    <span className={course.status === 'active' ? 'badge badge-active' : 'badge badge-inactive'}>
                                        {course.status === 'active' ? 'Aktiv' : 'Inaktiv'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/*<div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '8px', borderLeft: '4px solid #3498db' }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>💡 Erweiterungsmöglichkeiten:</h3>
        <ul style={{ color: '#555', lineHeight: '1.8', marginLeft: '20px' }}>
          <li>Suchfunktion implementieren</li>
          <li>Filterfunktion nach Status</li>
          <li>Detailansicht für jeden Kurs</li>
          <li>Anzahl Teilnehmende pro Kurs anzeigen</li>
          <li>Kurse hinzufügen/bearbeiten/löschen</li>
        </ul>
      </div>*/}
        </div>
    )
}

export default Courses
