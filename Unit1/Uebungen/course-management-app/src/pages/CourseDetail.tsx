import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {useCourses} from '../hooks/useCourses'

function CourseDetail(): React.ReactElement {
    const {id} = useParams<{ id: string }>()
    const {courses} = useCourses()
    const course = courses.find(c => c.id === Number(id))

    if (!course) {
        return (
            <div>
                <Link to="/courses" className="btn-back">← Zurück zu Kursen</Link>
                <p style={{marginTop: '20px', color: '#999'}}>Kurs nicht gefunden.</p>
            </div>
        )
    }

    return (
        <div>
            <Link to="/courses" className="btn-back">← Zurück zu Kursen</Link>
            <h1 className="page-title">{course.title}</h1>

            <div className="detail-card">
                <div className="detail-row">
                    <span className="detail-label">Datum</span>
                    <span>{new Date(course.date).toLocaleDateString('de-DE')}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Status</span>
                    <span className={course.status === 'active' ? 'badge badge-active' : 'badge badge-inactive'}>
                        {course.status}
                    </span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Beschreibung</span>
                    <span>{course.description}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Anzahl Teilnehmende</span>
                    <span>{course.participantsList.length}</span>
                </div>
            </div>

            <h2 className="section-title">Teilnehmende in diesem Kurs</h2>

            {course.participantsList.length > 0 ? (
                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Status</th>
                            <th>Aktionen</th>
                        </tr>
                        </thead>
                        <tbody>
                        {course.participantsList.map(p => (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.email}</td>
                                <td>
                                        <span
                                            className={p.status === 'completed' || p.status === 'active' ? 'badge badge-active' : 'badge badge-inactive'}>
                                            {p.status}
                                        </span>
                                </td>
                                <td>
                                    <Link to={`/participants/${p.id}`} className="btn-detail">Details</Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p style={{color: '#999', marginTop: '10px'}}>Keine Teilnehmenden für diesen Kurs.</p>
            )}

            <div className="action-buttons">
                <button className='btn-edit'>Änderung speichern</button>
                <button className='btn-delete'>Kurs löschen</button>
            </div>
        </div>
    )
}

export default CourseDetail
