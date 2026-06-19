import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function TicketOverview({ tickets, onNew }) {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <div>
          <Typography variant="h5">Tickets</Typography>
          <Typography variant="body2" color="text.secondary">Übersicht und Verwaltung von Support‑Tickets</Typography>
        </div>
        <Button variant="contained" color="primary" onClick={onNew}>Neues Ticket</Button>
      </Box>

      <Card>
        <CardContent>
          {tickets.length === 0 ? (
            <Typography color="text.secondary">Keine Tickets vorhanden. Erstelle ein neues Ticket.</Typography>
          ) : (
            <List>
              {tickets.map((t, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={t.title} secondary={`${t.priority} • ${t.category}`} />
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}
