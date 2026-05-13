import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCourses } from '../hooks/useCourses'
import { useParticipants } from '../hooks/useParticipants'

function ParticipantDetail(): React.ReactElement {
    const { id } = useParams<{ id: string }>()
    const { participants } = useParticipants()
    const { courses } = useCourses()
    const participant = participants.find(p => p.id === Number(id))
    const course = courses.find(c => c.id === participant?.courseId)

    if (!participant) {
        return (
            <div>
                <Link to="/participants" className="btn-back">← Zurück zu Teilnehmenden</Link>
                <p style={{ marginTop: '20px', color: '#999' }}>Teilnehmer/in nicht gefunden.</p>
            </div>
        )
    }
   

    return (
        <div>
            <Link to="/participants" className="btn-back">← Zurück zu Teilnehmenden</Link>
            <h1 className="page-title">{participant.name}</h1>

            <div className="detail-card">
                <div className="detail-row">
                    <span className="detail-label">E-Mail</span>
                    <span>{participant.email}</span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Status</span>
                    <span className={participant.status === 'active' || participant.status === 'enrolled' ? 'badge badge-active' : 'badge badge-inactive'}>
                        {participant.status}
                    </span>
                </div>
                <div className="detail-row">
                    <span className="detail-label">Zugewiesener Kurs</span>
                    {course ? (
                        <Link to={`/courses/${course.id}`} className="link-text">
                            {course.title}
                        </Link>
                    ) : (
                        <span>Unbekannter Kurs</span>
                    )}
                </div>
                {course && (
                    <div className="detail-row">
                        <span className="detail-label">Kursstatus</span>
                        <span className={course.status === 'active' ? 'badge badge-active' : 'badge badge-inactive'}>
                            {course.status}
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ParticipantDetail
