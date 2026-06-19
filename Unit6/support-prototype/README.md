Support App — Mini‑Prototyp

Manuelle Einrichtung und Struktur

1) Projekt initialisieren (React + Vite)

```bash
# neues Projekt mit Vite + React
npm init vite@latest support-prototype -- --template react
cd support-prototype
npm install
```

2) MUI und Emotion installieren

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

3) Projekt starten

```bash
npm run dev
# öffne http://localhost:5173
```

Was in welche Datei gehört

- `src/main.jsx`:
  - Einstiegspunkt. `createRoot` auf `#root` aufrufen.
  - Globale Styles/Reset importieren (z. B. `CssBaseline`).
  - `App` rendern.

- `src/App.jsx`:
  - Verantwortlich für die einfache View‑Navigation (lokaler State: z. B. `overview`, `new`, `confirm`).
  - Enthält das AppBar/Grundlayout (Container) und entscheidet, welche der drei Views angezeigt wird.
  - Verwaltet Tickets im lokalen State und Übergabe von Handlern (`onNew`, `onSave`, `onCancel`).

- `src/components/NewTicketForm.jsx`:
  - Formularfelder: `Titel` (required), `Beschreibung`, `Priorität` (select), `Kategorie` (select).
  - Aktionen: `Speichern` (Primäraktion, submit) und `Abbrechen` (Sekundäraktion).
  - Validierung: mindestens Titel Pflichtfeld.

- `src/components/TicketOverview.jsx`:
  - Start-/Übersichtsseite: Listet vorhandene Tickets (kurze Angaben: Titel, Priorität, Kategorie).
  - Hauptaktion: großer Button „Neues Ticket“ sichtbar oben rechts/oben.
  - Hilfetext/Orientierungstext oberhalb der Liste.

- `src/components/Confirmation.jsx`:
  - Kurze Bestätigung nach dem Speichern mit Zusammenfassung und Button zurück zur Übersicht.

Zusätzliche Hinweise

- `index.html` enthält das `div#root` und lädt `src/main.jsx`.
- `package.json`: Scripts für `dev`, `build`, `preview` (Vite) sind praktisch.
- Speichermechanismus: Für den Prototyp einfachen lokalen State verwenden. Backend/Storage kann später ergänzt werden.

Schneller Workflow (zusammengefasst)

```bash
npm init vite@latest support-prototype -- --template react
cd support-prototype
npm install
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm run dev
```

Dateien im Beispielprojekt

- `src/main.jsx` — Einstieg und Render
- `src/App.jsx` — Navigation + State
- `src/components/NewTicketForm.jsx` — Formular
- `src/components/TicketOverview.jsx` — Übersicht
- `src/components/Confirmation.jsx` — Bestätigung


Viel Erfolg — sag Bescheid, wenn ich die README noch mit Code‑Snippets oder Screenshots ergänzen soll.
