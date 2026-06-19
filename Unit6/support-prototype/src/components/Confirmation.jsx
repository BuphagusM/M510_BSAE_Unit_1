import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export default function Confirmation({ ticket, onBack }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6">Ticket erstellt</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>{ticket?.title}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{ticket?.category} • {ticket?.priority}</Typography>

      <Typography variant="body2">Das Ticket wurde angelegt. Du kannst zur Übersicht zurückkehren.</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="contained" onClick={onBack}>Zur Übersicht</Button>
      </Box>
    </Paper>
  )
}
