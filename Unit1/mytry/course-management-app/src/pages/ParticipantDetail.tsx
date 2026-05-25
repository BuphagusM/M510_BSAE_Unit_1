import React from 'react'
import {Link, useLocation, useParams} from 'react-router-dom'
import {useParticipants} from '../hooks/useParticipants'
import {ParticipantDTO} from '../model/participant-dto'
import {useParticipantDetailForm} from '../hooks/useParticipantDetailForm'
import {Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography} from '@mui/material'

function ParticipantDetail(): React.ReactElement {
    const {id} = useParams<{ id: string }>()
    const location = useLocation().pathname.endsWith('/create');
    const {participants} = useParticipants()
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
    } = useParticipantDetailForm(participant)

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
                        value={formData.enrollmentDate}
                        onChange={handleChange}
                        fullWidth
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
