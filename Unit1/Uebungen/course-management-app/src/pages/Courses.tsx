import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCourses } from '../hooks/useCourses'
import { useParticipants } from '../hooks/useParticipants'

function Courses(): React.ReactElement {
    const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all')
    const { courses } = useCourses()
    const { participants } = useParticipants()

    const getParticipantCount = (courseId: number): number =>
        participants.filter(p => p.courseId === courseId).length

    const filteredCourses = statusFilter === 'all'
        ? courses
        : courses.filter(c => c.status === statusFilter)

    return (
        <div>
            <h1 className="page-title">Kurse</h1>

            <div className="filter-bar">
                <label htmlFor="status-filter" className="filter-label">Status:</label>
                <select
                    id="status-filter"
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value as 'all' | 'active' | 'inactive')}
                    className="filter-select"
                >
                    <option value="all">Alle</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Kurstitel</th>
                            <th>Datum</th>
                            <th>Status</th>
                            <th>Teilnehmende</th>
                            <th>Aktionen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCourses.map(course => (
                            <tr key={course.id}>
                                <td>{course.title}</td>
                                <td>{new Date(course.date).toLocaleDateString('de-DE')}</td>
                                <td>
                                    <span className={course.status === 'active' ? 'badge badge-active' : 'badge badge-inactive'}>
                                        {course.status}
                                    </span>
                                </td>
                                <td>{getParticipantCount(course.id)}</td>
                                <td>
                                    <Link to={`/courses/${course.id}`} className="btn-detail">Details</Link>
                                </td>
                            </tr>
                        ))}
                        {filteredCourses.length === 0 && (
                            <tr>
                                <td colSpan={5} style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                                    Keine Kurse gefunden.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Courses
