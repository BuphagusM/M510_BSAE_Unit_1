import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

const priorities = ['Niedrig', 'Normal', 'Hoch']
const categories = ['Hardware', 'Software', 'Netzwerk', 'Allgemein']

export default function NewTicketForm({ onCancel, onSave }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Normal')
  const [category, setCategory] = useState('Allgemein')

  function handleSubmit(e) {
    e.preventDefault()
    const ticket = { title, description, priority, category, createdAt: new Date().toISOString() }
    onSave(ticket)
  }

  return (
    <Paper sx={{ p: 3 }} component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" sx={{ mb: 1 }}>Neues Ticket erfassen</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Fülle die wichtigsten Informationen aus, um das Ticket zu erstellen.</Typography>

      <TextField label="Titel" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth required sx={{ mb: 2 }} />

      <TextField label="Beschreibung" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth multiline rows={4} sx={{ mb: 2 }} />

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField select label="Priorität" value={priority} onChange={(e) => setPriority(e.target.value)} sx={{ minWidth: 160 }}>
          {priorities.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
        </TextField>

        <TextField select label="Kategorie" value={category} onChange={(e) => setCategory(e.target.value)} sx={{ minWidth: 200 }}>
          {categories.map((c) => <MenuItem key={c} value={c}>{c}</MenuItem>)}
        </TextField>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
        <Button variant="outlined" color="inherit" onClick={onCancel}>Abbrechen</Button>
        <Button variant="contained" color="primary" type="submit">Speichern</Button>
      </Box>
    </Paper>
  )
}
