import React from 'react'
import {
    Typography, Stack, Chip, Divider,
    Table, TableHead, TableRow, TableCell, TableBody, IconButton
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {CourseDTO} from '../model/course-dto'

interface Props {
    course: CourseDTO
    onClose: () => void
}

function CourseDetailView({course, onClose}: Props): React.ReactElement {
    return (
        <Stack spacing={2}>
            <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography variant="h6">{course.title}</Typography>
                <IconButton onClick={onClose} size="small"><CloseIcon /></IconButton>
            </Stack>
            <Divider />

            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCell><Typography color="text.secondary">Datum</Typography></TableCell>
                        <TableCell>{new Date(course.date).toLocaleDateString('de-DE')}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography color="text.secondary">Status</Typography></TableCell>
                        <TableCell>
                            <Chip label={course.status} color={course.status === 'active' ? 'success' : 'default'} size="small" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography color="text.secondary">Dozent</Typography></TableCell>
                        <TableCell>{course.instructor}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography color="text.secondary">Kapazität</Typography></TableCell>
                        <TableCell>{course.participantsList.length} / {course.capacity}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography color="text.secondary">Beschreibung</Typography></TableCell>
                        <TableCell>{course.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Typography variant="subtitle2" sx={{mt: 1}}>Teilnehmende</Typography>
            <Divider />
            {course.participantsList.length > 0 ? (
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>E-Mail</TableCell>
                            <TableCell>Status</TableCell>
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
                                        color={p.status === 'active' || p.status === 'completed' ? 'success' : 'default'}
                                        size="small"
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <Typography color="text.secondary">Keine Teilnehmenden</Typography>
            )}
        </Stack>
    )
}

export default CourseDetailView
