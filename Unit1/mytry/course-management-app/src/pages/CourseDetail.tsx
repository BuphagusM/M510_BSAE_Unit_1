import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {useCourses} from '../hooks/useCourses'
import {useCourseDetailForm} from '../hooks/useCourseDetailForm'
import {TextField, Select, MenuItem, FormControl, InputLabel, Button, Stack, Typography, Table, TableHead, TableRow, TableCell, TableBody, Chip} from '@mui/material'

function CourseDetail(): React.ReactElement {
    const {id} = useParams<{ id: string }>()
    const {courses} = useCourses()
    const course = courses.find(c => c.id === Number(id))
    const {formData, handleChange, handleSelectChange, handleSubmit, handleDelete} = useCourseDetailForm(course)

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

            <form onSubmit={handleSubmit}>
                <Stack spacing={2} sx={{mt: 2, mb: 3}}>
                    <TextField
                        label="Titel"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Datum"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        fullWidth
                        slotProps={{inputLabel: {shrink: true}}}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="status-label">Status</InputLabel>
                        <Select
                            labelId="status-label"
                            name="status"
                            value={formData.status}
                            label="Status"
                            onChange={handleSelectChange}
                        >
                            <MenuItem value="active">active</MenuItem>
                            <MenuItem value="inactive">inactive</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Beschreibung"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={3}
                    />
                    <TextField
                        label="Dozent"
                        name="instructor"
                        value={formData.instructor}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Kapazität"
                        name="capacity"
                        type="number"
                        value={formData.capacity}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Anzahl Teilnehmende"
                        value={course.participantsList.length}
                        fullWidth
                        slotProps={{input: {readOnly: true}}}
                    />
                </Stack>

                <Stack direction="row" spacing={2} sx={{mb: 3}}>
                    <Button type="submit" variant="contained" color="primary">
                        Änderung speichern
                    </Button>
                    <Button type="button" variant="contained" color="error" onClick={handleDelete}>
                        Kurs löschen
                    </Button>
                </Stack>
            </form>

            <Typography variant="h5" sx={{mt: 4, mb: 2}}>Teilnehmende in diesem Kurs</Typography>

            {course.participantsList.length > 0 ? (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>E-Mail</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Aktionen</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {course.participantsList.map(p => (
                            <TableRow key={p.id}>
                                <TableCell>{p.name}</TableCell>
                                <TableCell>{p.email}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={p.status}
                                        color={p.status === 'completed' || p.status === 'active' ? 'success' : 'default'}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button
                                        component={Link}
                                        to={`/participants/${p.id}`}
                                        variant="outlined"
                                        size="small"
                                    >
                                        Details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <Typography color="text.secondary" sx={{mt: 1}}>Keine Teilnehmenden für diesen Kurs.</Typography>
            )}
        </div>
    )
}

export default CourseDetail
