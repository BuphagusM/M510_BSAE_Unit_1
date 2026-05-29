import React from 'react'
import {Link, useLocation, useParams} from 'react-router-dom'
import {useParticipants} from '../hooks/useParticipants'
import {ParticipantDTO} from '../model/participant-dto'
import {useParticipantDetailForm} from '../hooks/useParticipantDetailForm'
import {Alert, Button, FormControl, InputLabel, MenuItem, Select, Snackbar, Stack, TextField, Typography} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

function ParticipantDetail(): React.ReactElement {
    const {id} = useParams<{ id: string }>()
    const location = useLocation().pathname.endsWith('/create');
    const {participants} = useParticipants()
    const [notification, setNotification] = React.useState<{
        message: string
        severity: 'success' | 'error' | 'info' | 'warning'
    } | null>(null)

    const showNotification = (message: string, severity: 'success' | 'error' | 'info' | 'warning' = 'success') => {
        setNotification({message, severity})
    }

    const closeNotification = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return
        setNotification(null)
    }

    const newParticipant: ParticipantDTO = {
        id: 0,
        name: '',
        email: '',
        coursesDetails: [],
        status: 'active',
        enrollmentDate: ''
    }

    const participant = location ? newParticipant : participants.find(p => p.id === Number(id))
    const {
        formData,
        handleChange,
        handleSelectChange,
        handleSubmit,
        handleDelete,
        handleCreate
    } = useParticipantDetailForm(participant, showNotification)

    if (!participant && !!id) {
        return (
            <Stack>
                <Link to="/participants" className="btn-back">← Zurück zu Teilnehmenden</Link>
                <Typography variant="body1" sx={{marginTop: '20px', color: '#999'}}>
                    Teilnehmer/in nicht gefunden.
                </Typography>
            </Stack>
        )
    }

    return (
        <Stack>
            <Link to="/participants" className="btn-back">← Zurück zu Teilnehmenden</Link>
            <Typography variant="h4"
                        gutterBottom>{location ? 'Neuen Teilnehmer erstellen' : participant?.name}</Typography>

            <Snackbar
                open={!!notification}
                autoHideDuration={4000}
                onClose={closeNotification}
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            >
                <Alert
                    onClose={closeNotification}
                    severity={notification?.severity ?? 'success'}
                    icon={notification?.severity === 'success' ? <CheckIcon fontSize="inherit" /> : undefined}
                    sx={{width: '100%'}}
                >
                    {notification?.message}
                </Alert>
            </Snackbar>

            <form onSubmit={handleSubmit}>
                <Stack spacing={2} sx={{mt: 2, mb: 3}}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="E-Mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="einschreibedatum"
                        name="enrollmentDate"
                        type="date"
                        value={formData.enrollmentDate}
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
                            onChange={handleSelectChange}
                            label="Status"
                        >
                            <MenuItem value="active">Aktiv</MenuItem>
                            <MenuItem value="inactive">Inaktiv</MenuItem>
                            <MenuItem value="completed">Abgeschlossen</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                {location ? (
                    <Stack direction="row" spacing={2} sx={{mb: 3}}>
                        <Button type="button" variant="contained" color="success" onClick={handleCreate}>
                            Erfassen
                        </Button>
                    </Stack>
                ) : (
                    <Stack direction="row" spacing={2} sx={{mb: 3}}>
                        <Button type="submit" variant="contained" color="primary">
                            Änderung speichern
                        </Button>
                        <Button type="button" variant="contained" color="error" onClick={handleDelete}>
                            Kurs löschen
                        </Button>
                    </Stack>
                )}
            </form>
        </Stack>
    )
}

export default ParticipantDetail
