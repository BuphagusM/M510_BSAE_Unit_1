import React from 'react'
import {Chip, Divider, IconButton, Stack, Table, TableBody, TableCell, TableRow, Typography} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {ParticipantDTO} from "../model/participant-dto.ts";

interface Props {
    participant: ParticipantDTO
    onClose: () => void
}

function ParticipantDetailView({participant, onClose}: Props): React.ReactElement {
    return (
        <Stack spacing={2}>
            <Stack direction="row" sx={{justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography variant="h6">{participant.name}</Typography>
                <IconButton onClick={onClose} size="small"><CloseIcon/></IconButton>
            </Stack>
            <Divider/>

            <Table size="small">
                <TableBody>
                    <TableRow>
                        <TableCell><Typography color="text.secondary">Einschreibedatum</Typography></TableCell>
                        <TableCell>{new Date(participant.enrollmentDate).toLocaleDateString('de-DE')}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography color="text.secondary">Status</Typography></TableCell>
                        <TableCell>
                            <Chip label={participant.status}
                                  color={participant.status === 'active' ? 'success' : 'default'} size="small"/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Typography color="text.secondary">Email</Typography></TableCell>
                        <TableCell>{participant.email}</TableCell>
                    </TableRow>
                    <Typography variant="subtitle2" sx={{mt: 1}}>Eingeschrieben Kurse</Typography>

                    {participant.coursesDetails.length > 0 && participant.coursesDetails.map((pcd, index) => (
                        <React.Fragment key={index}>
                            <TableRow>
                                <TableCell>
                                    <Typography color="text.secondary">
                                        Kurstitel
                                    </Typography>
                                </TableCell>
                                <TableCell>{pcd.title}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Typography color="text.secondary">
                                        Kurs Details
                                    </Typography>
                                </TableCell>
                                <TableCell>{pcd.description}</TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
                {participant.coursesDetails.length === 0 && (
                <Typography color="text.secondary">Keine Teilnehmenden</Typography>
                )}
            </Table>
        </Stack>
    )
}

export default ParticipantDetailView
