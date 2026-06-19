# App Navigation & Datenflusss – Explain

## Alternative zu React Router: State-basierte Navigation

Diese App nutzt **kein React Router**, sondern **State-basierte Conditional Rendering**. Das ist ein einfacheres Pattern für kleine Prototypen.

### Das Prinzip

Statt URLs wie `/overview`, `/new-ticket`, `/confirm`:
- Speichert die App den aktuellen View in `state` (Zeile 12):
  ```jsx
  const [view, setView] = useState('overview') // 'overview' | 'new' | 'confirm'
  ```
- Basierend auf `view` werden unterschiedliche Komponenten gerendert
- Mit `setView()` wechselt die App den View

### Der Render-Block

```jsx
<Container sx={{ mt: 4 }}>
  {view === 'overview' && <TicketOverview/>}
  {view === 'new' && <NewTicketForm/>}
  {view === 'confirm' && <Confirmation/>}
</Container>
```

Nur **eine** dieser Komponenten wird gleichzeitig angezeigt.

---

## Datenfluss: Wie Props & Callbacks funktionieren

### Kurz gesagt

Ja, dieser Teil übergibt Daten an `NewTicketForm`, aber nur zwei Funktionen:

- `onCancel={() => setView('overview')}`
- `onSave={handleCreate}`

Das sind Props, keine direkten Ticketdaten.

---

### Was genau passiert

`NewTicketForm` erhält:

- `onCancel`: eine Funktion, die `App` sagt, auf die Übersicht zurückzugehen
- `onSave`: eine Funktion, die `App` sagt, dass ein neues Ticket gespeichert werden soll

Also: `App` gibt `NewTicketForm` keine Ticketdaten vor, sondern zwei Anweisungen, was es tun soll.

---

### Wie kommen Daten zurück?

Nicht durch „Rückgabe" im JSX. Stattdessen bekommt die Kind-Komponente `NewTicketForm` eine Funktion:

- Wenn `NewTicketForm` z.B. `props.onSave(ticket)` aufruft,
- dann landet `ticket` in `App` als Argument von `handleCreate(ticket)`

Und `handleCreate` macht dann:

- `setTickets((t) => [ticket, ...t])`
- `setLastCreated(ticket)`
- `setView('confirm')`

---

### Fazit

- `NewTicketForm` bekommt Daten: ja, zwei Props (`onCancel` und `onSave`)
- `NewTicketForm` bekommt keine Ticket-Inhalte direkt
- Daten „kommen zurück" nur, wenn `NewTicketForm` die Callback-Funktion `onSave` mit einem Ticket aufruft

---

## Der komplette Flow: Schritt-für-Schritt

### 1. Start: Overview-View
- `view === 'overview'` → `<TicketOverview />` wird angezeigt
- Diese Komponente zeigt alle bisherigen Tickets

### 2. Nutzer klickt "Neues Ticket"
```jsx
<TicketOverview
  tickets={tickets}
  onNew={() => setView('new')}  // ← Klick hier!
/>
```
- Setzt `view` auf `'new'`

### 3. Neues Formular erscheint
- `view === 'new'` → `<NewTicketForm />` wird angezeigt
- Nutzer füllt Daten ein
- Klick auf „Speichern" ruft `onSave(ticket)` auf

### 4. handleCreate wird aufgerufen
```jsx
function handleCreate(ticket) {
  setTickets((t) => [ticket, ...t])  // Ticket hinzufügen
  setLastCreated(ticket)              // Merken für Bestätigung
  setView('confirm')                  // → Zur Bestätigung
}
```

### 5. Bestätigungsseite
- `view === 'confirm'` → `<Confirmation />` wird angezeigt
- Zeigt das neue Ticket an
- Klick auf „Zurück" setzt `view` auf `'overview'`

---

## Vorteile dieses Patterns

| Feature | Router-Variante | State-Variante |
|---------|-----------------|-----------------|
| Browser-History | ✓ | ✗ |
| Lesezeichen möglich | ✓ | ✗ |
| URL ändert sich | ✓ | ✗ |
| Einfach zu verstehen | ✗ | ✓ |
| Gut für Prototypen | ✗ | ✓ |
| Keine externe Library | ✗ | ✓ |

Diese App ist ein **Prototyp** → State-Variante ist perfekt.
