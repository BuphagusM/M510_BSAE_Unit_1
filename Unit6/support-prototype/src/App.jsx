import React, { useState } from 'react'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TicketOverview from './components/TicketOverview'
import NewTicketForm from './components/NewTicketForm'
import Confirmation from './components/Confirmation'

export default function App() {
  const [view, setView] = useState('overview') // 'overview' | 'new' | 'confirm'
  const [tickets, setTickets] = useState([])
  const [lastCreated, setLastCreated] = useState(null)

  function handleCreate(ticket) {
    setTickets((t) => [ticket, ...t])
    setLastCreated(ticket)
    setView('confirm')
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Support App — Mini‑Prototyp</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        {view === 'overview' && (
          <TicketOverview
            tickets={tickets}
            onNew={() => setView('new')}
          />
        )}

        {view === 'new' && (
          <NewTicketForm
            onCancel={() => setView('overview')}
            onSave={handleCreate}
          />
        )}

        {view === 'confirm' && (
          <Confirmation
            ticket={lastCreated}
            onBack={() => setView('overview')}
          />
        )}
      </Container>
    </Box>
  )
}
