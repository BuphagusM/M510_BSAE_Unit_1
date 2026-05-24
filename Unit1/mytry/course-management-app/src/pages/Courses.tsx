import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useCourses} from '../hooks/useCourses'
import {Table, TableHead, TableRow, TableCell, TableBody, Modal, Chip} from '@mui/material'
import Box from '@mui/material/Box'
import CourseDetailView from '../components/CourseDetailView'
import {CourseDTO} from '../model/course-dto'

function Courses(): React.ReactElement {
    const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const {courses} = useCourses()
    const [selectedCourse, setSelectedCourse] = useState<CourseDTO | null>(null)

    const filteredCourses = courses.filter(c =>
        ((statusFilter === 'all') ||
            (statusFilter === 'active' && c.status === 'active') ||
            (statusFilter === 'inactive' && c.status === 'inactive')) &&
        [c.title, c.date, c.instructor].join(' ').toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div>
            <h1 className="page-title">Kurse</h1>

            <div className="filter-container">
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
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Kurse suchen..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="action-buttons">
                    <button className="btn-add">Kurs Hinzufügen</button>
                </div>
            </div>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Kurstitel</TableCell>
                        <TableCell>Datum</TableCell>
                        <TableCell>Dozent</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Teilnehmende</TableCell>
                        <TableCell>Aktionen</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredCourses.map(course => (
                        <TableRow key={course.id} onClick={() => setSelectedCourse(course)}>
                            <TableCell>{course.title}</TableCell>
                            <TableCell>{new Date(course.date).toLocaleDateString('de-DE')}</TableCell>
                            <TableCell>{course.instructor}</TableCell>
                            <TableCell>
                                <Chip
                                    label={course.status}
                                    color={course.status === 'active' ? 'success' : 'default'}
                                    size="small"
                                />
                            </TableCell>
                            <TableCell>
                                {course.participantsList.length}/{course.capacity}
                            </TableCell>
                            <TableCell>
                                <Link to={`/courses/${course.id}`} className="btn-detail">Bearbeiten</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                    {filteredCourses.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={6} sx={{textAlign: 'center', py: 4}}>
                                Keine Kurse gefunden.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <Modal open={!!selectedCourse} onClose={() => setSelectedCourse(null)}>
                <Box sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 560, maxHeight: '80vh', overflowY: 'auto',
                    bgcolor: 'background.paper', borderRadius: 2,
                    boxShadow: 24, p: 4,
                }}>
                    {selectedCourse && (
                        <CourseDetailView
                            course={selectedCourse}
                            onClose={() => setSelectedCourse(null)}
                        />
                    )}
                </Box>
            </Modal>
        </div>
    )
}

export default Courses
