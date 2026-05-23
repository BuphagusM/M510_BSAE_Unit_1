# Kursverwaltungs-App – Analyse und Erweiterung

## Teil 1 & 2: Analyse und Dokumentation

### Zielgruppen

| Zielgruppe | Beschreibung |
|---|---|
| **Administration** | Arbeitet regelmässig mit der Anwendung, benötigt eine effiziente und übersichtliche Oberfläche |
| **Kursleitung** | Nutzt die Anwendung seltener, benötigt einfachen Zugriff auf relevante Informationen |

---

### Wichtigste Bedürfnisse

**Administration**
- Schnelle Übersicht über Kurse und Teilnehmende
- Wenig Klicks bis zur gesuchten Information
- Klare und logische Navigation
- Einfache Bearbeitung von Daten
- Schnelle Auffindbarkeit wichtiger Informationen (z. B. Kursstatus, Anzahl Teilnehmende)

**Kursleitung**
- Einfache Orientierung ohne technisches Vorwissen
- Reduzierte Komplexität der Oberfläche
- Schneller Zugriff auf Teilnehmerlisten und Kursinformationen
- Verständliche, einheitliche Darstellung

---

### Nutzungskontext

| Zielgruppe | Kontext |
|---|---|
| Administration | Desktop-Nutzung, häufig, teilweise unter Zeitdruck, parallel zu E-Mail / Telefon |
| Kursleitung | Desktop-Nutzung, gelegentlich, Fokus auf Übersicht und einfache Navigation |

Da beide Zielgruppen primär am Desktop arbeiten, ist eine klassische Sidebar-Navigation geeignet. Zeitsparendes Arbeiten (Suche, Filter) ist für die Administration besonders relevant.

---

### Anforderungsanalyse

| Anforderung | Bewertung | Begründung | Verbesserung |
|---|---|---|---|
| Klare Navigation zwischen Hauptbereichen | ✅ vorhanden | Sidebar mit drei Navigationspunkten (Dashboard, Kurse, Teilnehmende); aktiver Link wird hervorgehoben | – |
| Kursübersicht | ✅ vorhanden | Tabelle mit Titel, Datum und Status vorhanden | – |
| Teilnehmendenübersicht | ✅ vorhanden | Tabelle mit Name, E-Mail und zugewiesenem Kurs vorhanden | – |
| Kurs: Titel | ✅ vorhanden | Spalte «Kurstitel» in Tabelle | – |
| Kurs: Datum | ✅ vorhanden | Spalte «Datum» mit deutschem Format | – |
| Kurs: Status | ✅ vorhanden | Status-Badge (Aktiv / Inaktiv) in Tabelle | – |
| Teilnehmende: Name | ✅ vorhanden | Spalte «Name» in Tabelle | – |
| Teilnehmende: E-Mail | ✅ vorhanden | Spalte «E-Mail» in Tabelle | – |
| Teilnehmende: zugewiesener Kurs | ✅ vorhanden | Kurstitel wird aus ID aufgelöst und angezeigt | – |
| Suchfunktion für Teilnehmende | ❌ fehlte | Kein Suchfeld vorhanden; Tabelle war nicht filterbar | **Implementiert:** Echtzeit-Suche nach Namen in `Participants.tsx` |
| Filterfunktion für Kursstatus | ❌ fehlte | Kein Filter vorhanden; alle Kurse wurden stets angezeigt | **Implementiert:** Dropdown-Filter (Alle / Aktiv / Inaktiv) in `Courses.tsx` |
| Teilnehmerstatus sichtbar | ❌ fehlte | Kein Status-Feld im Datenmodell vorhanden | **Implementiert:** `status`-Feld im `Participant`-Interface + Badge-Darstellung |
| Anzahl Teilnehmende pro Kurs | ❌ fehlte | Nicht in der Kursübersicht sichtbar | **Implementiert:** Spalte «Teilnehmende» mit berechneter Anzahl in `Courses.tsx` |
| Detailansicht für Kurse | ❌ fehlte | Keine Weiterleitung zu Kursdetails möglich | **Implementiert:** Route `/courses/:id` mit `CourseDetail.tsx` inkl. Teilnehmerliste |
| Detailansicht für Teilnehmende | ❌ fehlte | Keine Weiterleitung zu Teilnehmerdetails möglich | **Implementiert:** Route `/participants/:id` mit `ParticipantDetail.tsx` inkl. Kurslink |

---

### Beobachtete Schwächen (vor Erweiterung)

1. **Keine Suchfunktion** – Die Administration kann keine Teilnehmenden suchen. Bei wachsenden Datenmengen ist dies ineffizient.
2. **Kein Statusfilter** – In der Kursübersicht werden immer alle Kurse angezeigt, unabhängig vom Status. Die Kursleitung kann aktive Kurse nicht direkt herausfiltern.
3. **Kein Teilnehmerstatus** – Ob jemand eingeschrieben oder inaktiv ist, war nicht erkennbar. Das Feld fehlte im Datenmodell komplett.
4. **Fehlende Anzahl Teilnehmende** – Der Kursverantwortliche sieht nicht auf einen Blick, wie viele Personen einem Kurs zugeordnet sind.
5. **Keine Detailansichten** – Weder für Kurse noch für Teilnehmende gab es Einzelansichten. Tiefergehende Informationen waren nicht zugänglich.
6. **Dashboard-Platzhaltertext** – Der Text «Diese Dashboard-Seite zeigt eine Übersicht...» trägt keinen Mehrwert und wirkt unfertig.

---

## Teil 3: Implementierte Erweiterungen

### 1. Suchfunktion für Teilnehmende (`Participants.tsx`)

Ein Texteingabefeld filtert die Teilnehmendenliste in Echtzeit nach dem eingegebenen Namen (case-insensitive). Wird kein Treffer gefunden, erscheint ein Hinweistext.

### 2. Filterfunktion für Kursstatus (`Courses.tsx`)

Ein Dropdown-Menü erlaubt die Filterung der Kursliste nach Status: **Alle**, **Aktiv** oder **Inaktiv**. Die Tabelle aktualisiert sich sofort via `useState`.

### 3. Teilnehmerstatus anzeigen

Das `Participant`-Interface in `mockData.ts` wurde um das Feld `status: 'enrolled' | 'inactive'` erweitert. Alle Beispieldaten wurden mit einem Status versehen. Der Status wird als farbiger Badge in der Tabelle und der Detailansicht angezeigt.

### 4. Anzahl Teilnehmende pro Kurs (`Courses.tsx`)

In der Kursübersicht wurde eine neue Spalte «Teilnehmende» ergänzt, die dynamisch die Anzahl der zugeordneten Teilnehmenden berechnet.

### 5. Detailansicht für Kurse (`CourseDetail.tsx`)

Unter der Route `/courses/:id` wird eine Detailseite für jeden Kurs angezeigt. Sie enthält:
- Kursname, Datum, Status, Beschreibung, Anzahl Teilnehmende
- Liste aller zugeordneten Teilnehmenden mit Status und Direktlink zur Detailansicht

### 6. Detailansicht für Teilnehmende (`ParticipantDetail.tsx`)

Unter der Route `/participants/:id` wird eine Detailseite für jeden Teilnehmenden angezeigt. Sie enthält:
- Name, E-Mail, Status
- Verlinkung zum zugewiesenen Kurs inkl. Kursstatus

---

## Projektstruktur

```
src/
├── data/
│   └── mockData.ts              # Datenmodell + Beispieldaten (erweitert)
├── pages/
│   ├── Dashboard.tsx            # Statistik-Übersicht
│   ├── Courses.tsx              # Kursübersicht mit Filter + Anzahl
│   ├── CourseDetail.tsx         # Kursdetail (neu)
│   ├── Participants.tsx         # Teilnehmendenübersicht mit Suche + Status
│   └── ParticipantDetail.tsx   # Teilnehmerdetail (neu)
├── App.tsx                      # Routing inkl. Detailrouten
└── index.css                    # Globale Styles (erweitert)
```

---

## Installation und Start

```bash
npm install
npm run dev
```

Die Anwendung ist dann unter `http://localhost:5173` erreichbar.


Dies ist eine einfache **interne Kursverwaltungs-App** für eine Bildungsorganisation. Die Anwendung dient zur Verwaltung von Kursen und Teilnehmenden und soll als Basis für die Analyse und Erweiterung durch Studierende dienen.

## Features der aktuellen Version

### 🎯 Funktionalität
- **Dashboard**: Übersichtsseite mit Statistiken und aktuelle Kurse
- **Kurse**: Tabelle mit allen verfügbaren Kursen (Titel, Datum, Status)
- **Teilnehmende**: Übersicht aller Teilnehmenden mit ihrem zugewiesenen Kurs
- **Navigation**: Seitennavigation zur Orientierung

### 🎨 Benutzeroberfläche
- Responsive Sidebar-Navigation
- Klare Business-App-Struktur
- Einfache Karten- und Tabellenansichten
- Modernes, minimalistisches Design

### 📊 Beispieldaten
- 5 Beispielkurse (teils aktiv, teils inaktiv)
- 8 Beispielteilnehmende mit Kurszuweisungen
- Alle Daten lokal im Code als JavaScript-Arrays

## Technische Anforderungen erfüllt

✅ React 18 mit funktionalen Komponenten  
✅ **TypeScript** für Typsicherheit  
✅ React Router v6 für Navigation zwischen Seiten  
✅ Vite als Build-Tool  
✅ Einfache, leserliche Codestruktur  
✅ Keine Backend-Anbindung (Mock-Daten)  
✅ CSS mit moderner Struktur (Flexbox/Grid)  

## Installation und Start

### 1. Dependencies installieren
```bash
cd course-management-app
npm install
```

### 2. Entwicklungsserver starten
```bash
npm run dev
```

Die App öffnet sich auf `http://localhost:3000`

### 3. App bauen (für Produktion)
```bash
npm run build
```

## Projektstruktur

```
course-management-app/
├── src/
│   ├── pages/
│   │   ├── Dashboard.tsx       # Übersichtsseite
│   │   ├── Courses.tsx         # Kursübersicht
│   │   └── Participants.tsx    # Teilnehmerübersicht
│   ├── data/
│   │   └── mockData.ts         # Beispieldaten mit TypeScript Interfaces
│   ├── App.tsx                 # Haupt-App mit Router und Sidebar
│   ├── index.css               # Globale Styles
│   └── main.tsx                # React-Einstiegspunkt
├── index.html                  # HTML-Template
├── vite.config.ts              # Vite-Konfiguration
├── tsconfig.json               # TypeScript-Konfiguration
├── tsconfig.node.json          # TypeScript für Node
└── package.json                # Dependencies
```

## Code-Architektur
tsx**: Router-Setup und globale Navigation
- **Dashboard.tsx**: Zeigt Statistiken und aktive Kurse an
- **Courses.tsx**: Tabellenansicht aller Kurse
- **Participants.tsx**: Tabellenansicht aller Teilnehmenden

### Daten
- **mockData.ts**: Zentrale Beispieldaten mit TypeScript Interfaces (`Course`, `Participant`
### Daten
- **mockData.js**: Zentrale Beispieldaten (einfach erweiterbar)

## Absichtliche Lücken (für Studierendenaufgaben)

Diese App ist **bewusst nicht vollständig**. Die folgenden Features sind NICHT oder nur unvollständig implementiert:

❌ **Suchfunktion**: Keine Möglichkeit, nach Kursen oder Teilnehmenden zu suchen  
❌ **Filterfunktion**: Keine Filter nach Status, Kurs oder anderen Kriterien  
❌ **Detailansichten**: Keine umfassenden Detailseiten für Kurse oder Teilnehmende  
❌ **Teilnehmerstatus**: Der Status von Teilnehmenden wird nicht angezeigt  
❌ **Statistiken**: Anzahl Teilnehmende pro Kurs wird nicht angezeigt  
❌ **CRUD-Operationen**: Keine Möglichkeit, Kurse/Teilnehmende hinzuzufügen/zu bearbeiten/zu löschen  

## Mögliche Erweiterungen für Studierende

### Level 1 - Einfach
1. Suchfeld für Kurse hinzufügen
2. Filterfunktion nach Kursstatus
3. Teilnehmerzahl pro Kurs auf dem Dashboard anzeigen

### Level 2 - Mittelschwer
4. Detailseite für jeden Kurs erstellen (mit allen Teilnehmenden)
5. Formular zum Hinzufügen neuer Kurse (mit useState)
6. Löschen-Button für Kurse mit Bestätigung

### Level 3 - Fortgeschrittene
7. LocalStorage verwenden, um Daten persistent zu speichern
8. Backend-Integration mit einer REST-API
9. Teilnehmerstatus und weitere Informationen hinzufügen
10. Erweiterte Filter und Sortierfunktionen

## Code-Standards für Erweiterungen

### Komponenten-Struktur
```typescript
import React from 'react'

function MyComponent(): React.ReactElement {
  // Logik hier
  
  return (
    <div>
      {/* JSX hier */}
    </div>
  )
}

export default MyComponent
```

### TypeScript Interfaces erweitern
Neue Datenfelder in `src/data/mockData.ts` hinzufügen:

```typescript
export interface Course {
  id: number
  title: string
  date: string
  status: 'active' | 'inactive'
  description: string
  // Neue Felder hier hinzufügen
  instructor?: string
  capacity?: number
}

export const coursesData: Course[] = [
  {
    id: 1,
    title: 'Kursname',
    date: '2024-03-15',
    status: 'active',
    description: '...',
    instructor: '...',
    capacity: 30
  }
  // ... weitere Kurse
]
```

### Styling
- Globale Styles befinden sich in `src/index.css`
- Farben: Primär `#3498db`, Akzent `#2c3e50`

## Wichtige Abhängigkeiten

| Paket            | Version  | Zweck                                     |
|------------------|----------|-------------------------------------------|
| typescript       | ^5.3.2   | TypeScript Compiler                       |
| react            | ^18.2.0  | React-Bibliothek                          |
| react-dom        | ^18.2.0  | React DOM-Rendering                       |
| react-router-dom | ^6.20.0  | Routing zwischen Seiten                   |
| vite             | ^5.0.0   | Build-Tool und Dev-Server                 |
| @types/react     | ^18.2.37 | Type Definitions für React                |
| @types/react-dom | ^18.2.15 | Type Definitions für React DOMn verwenden |

## Ziel dieser Anwendung

Diese App ist kein vollständiges Produktivprodukt, sondern ein **Lernprojekt**. Das Ziel ist:

1. **Codeanalyse**: Studierende analysieren die bestehende Struktur
2. **Anforderungsanalyse**: Studierende identifizieren fehlende Features
3. **Implementierung**: Studierende implementieren die fehlenden Features selbst
4. **Best Practices**: Studierende lernen professionelle React-Praktiken

## Support und Debugging

### App lädt nicht?
```bash
# Dependencies neu installieren
npm install

# Node-Module löschen und neu installieren
rm -r node_modules package-lock.json
npm install
```

### Port 3000 bereits in Nutzung?
```bash
# In vite.config.js den Port anpassen:
# port: 3001
```

### Styling wird nicht angewendet?
- Browser-Cache leeren (Ctrl+Shift+Delete)
- Entwickler-Tools öffnen und Netzwerk-Tab prüfen

## Lizenz

Diese Anwendung dient zu Bildungszwecken.

---

**Viel Erfolg beim Analysieren und Erweitern der App! 🚀**
