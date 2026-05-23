import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParticipants } from '../hooks/useParticipants'

function Participants(): React.ReactElement {
    const [searchColumn, setSearchColumn] = useState<'all' | 'name' | 'email' | 'course'>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const { participants } = useParticipants()


    const filteredParticipants = participants.filter(p =>
        /*// Oder auch Richtig für suche in allen Feldern (auch ID):
        Object.values(p).join(' ').toLowerCase().includes(searchQuery.toLowerCase())
        */
        (searchColumn === 'name') && p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (searchColumn === 'email') && p.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (searchColumn === 'course') && p.coursesDetails.map(c => c.title).join(' ').toLowerCase().includes(searchQuery.toLowerCase()) ||
        // Für Suche in allen Feldern:
        searchColumn === 'all' &&
        [p.name, p.email, p.coursesDetails.map(c => c.title).join(' ')].join(' ').toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div>
            <h1 className="page-title">Teilnehmende</h1>

            <div className="filter-container">
                <div className="filter-bar" >
                    <label htmlFor="status-filter" className="filter-label">Suche in Spalte:</label>
                    <select
                        id="search-query"
                        value={searchColumn}
                        onChange={e => setSearchColumn(e.target.value as 'all' | 'name' | 'email' | 'course')}
                        className="filter-select"
                    >
                        <option value="all">Alle</option>
                        <option value="name">Name</option>
                        <option value="email">E-Mail</option>
                        <option value="course">Kurs</option>
                    </select>
                </div>

                <div className="search-bar" >
                    <input
                        type="text"
                        placeholder="Teilnehmende suchen..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Zugewiesener Kurs</th>
                            <th>Status</th>
                            <th>Aktionen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredParticipants.map(participant => (
                            <tr key={participant.id}>
                                <td>{participant.name}</td>
                                <td>{participant.email}</td>
                                <td>{participant.coursesDetails.map(c => c.title).join(', ')}</td>
                                <td>
                                    <span className={participant.status === 'completed' || participant.status === 'active'? 'badge badge-active' : 'badge badge-inactive'}>
                                        {participant.status}
                                    </span>
                                </td>
                                <td>
                                    <Link to={`/participants/${participant.id}`} className="btn-detail">Details</Link>
                                </td>
                            </tr>
                        ))}
                        {filteredParticipants.length === 0 && (
                            <tr>
                                <td colSpan={5} className="empty-table">
                                    Keine Teilnehmenden gefunden.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Participants
