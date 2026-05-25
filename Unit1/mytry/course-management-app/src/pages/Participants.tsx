import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useParticipants} from '../hooks/useParticipants'
import {
    Box,
    Button,
    Chip,
    MenuItem,
    Modal,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Tooltip,
    Typography
} from '@mui/material'
import {ParticipantDTO} from '../model/participant-dto'
import ParticipantDetailView from '../components/ParticipantDetailView'

function Participants(): React.ReactElement {
    const [searchColumn, setSearchColumn] = useState<'all' | 'name' | 'email' | 'course'>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const {participants} = useParticipants()
    const [selectedParticipant, setSelectedParticipant] = useState<ParticipantDTO | null>(null)


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
        <Stack>
            <Typography variant='h3'>Teilnehmende</Typography>
            <Stack direction="row"
                   sx={{
                       mb: 2
                   }}>
                <Tooltip title="Suche in Spalte" placement="bottom">
                    <Select
                        value={searchColumn}
                        onChange={e => setSearchColumn(e.target.value as 'all' | 'name' | 'email' | 'course')}
                        displayEmpty
                        className="status-filter"
                    >
                        <MenuItem value="all">Alle</MenuItem>
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="email">E-Mail</MenuItem>
                        <MenuItem value="course">Kurs</MenuItem>
                    </Select>
                </Tooltip>
                <TextField
                    label="Teilnehmende suchen..."
                    name="search"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    sx={{width: '60%', ml: 2}}
                />
                <Button
                    component={Link}
                    to={`/participants/create`}
                    variant="outlined"
                    size="large"
                    sx={{ml: 2}}
                >
                    Teilnehmer erfassen
                </Button>
            </Stack>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>E-Mail</TableCell>
                        <TableCell>Zugewiesener Kurs</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Aktionen</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredParticipants.map(participant => (
                        <TableRow key={participant.id} onClick={()=> setSelectedParticipant(participant)}>
                            <TableCell>{participant.name}</TableCell>
                            <TableCell>{participant.email}</TableCell>
                            <TableCell>{participant.coursesDetails.map(c => c.title).join(', ')}</TableCell>
                            <TableCell>
                                <Chip
                                    label={participant.status}
                                    color={participant.status === 'completed' || participant.status === 'active' ? 'success' : 'default'}
                                    size='small'
                                    sx={{minWidth: 100}}
                                />
                            </TableCell>
                            <TableCell>
                                <Link to={`/participants/${participant.id}`} className="btn-detail">Bearbeiten</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                    {filteredParticipants.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={5} align="center">
                                Keine Teilnehmenden gefunden.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Modal open={!!selectedParticipant} onClose={() => setSelectedParticipant(null)}>
                <Box sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 560, maxHeight: '80vh', overflowY: 'auto',
                    bgcolor: 'background.paper', borderRadius: 2,
                    boxShadow: 24, p: 4,
                }}>
                    {selectedParticipant && (
                        <ParticipantDetailView
                            participant={selectedParticipant}
                            onClose={() => setSelectedParticipant(null)}
                        />
                    )}
                </Box>
            </Modal>
        </Stack>
    )
}

export default Participants
