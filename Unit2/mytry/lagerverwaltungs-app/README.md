# Lagerverwaltungs-App – Übung Unit 2

Eine einfache interne Lagerverwaltungs-App als React-Unterrichtsbeispiel.

---

## Projekt starten

### 1. Abhängigkeiten installieren

```bash
npm install
```

### 2. Entwicklungsserver starten

```bash
npm run dev
```

Die App ist anschliessend unter **http://localhost:3000** erreichbar.

---

## Projektstruktur

```
src/
├── components/
│   └── Sidebar.tsx        Seitennavigation (auf allen Seiten sichtbar)
├── data/
│   └── mockData.ts        Lokale Beispieldaten + TypeScript-Interface
└── pages/
    ├── Dashboard.tsx      Übersichtsseite mit Kennzahlen
    ├── Articles.tsx       Artikelliste mit Suche und Filtern
    ├── Warnings.tsx       Kritische Artikel (Bestand ≤ Mindestbestand)
    └── Settings.tsx       Einstellungsseite (Platzhalter)
```

---

## Was bereits vorhanden ist

- React Router mit 4 Seiten (Dashboard, Artikel, Warnungen, Einstellungen)
- Sidebar-Navigation mit Hervorhebung des aktiven Menüpunkts
- 10 Beispielartikel in `src/data/mockData.ts`
- Artikelliste mit Suchfeld und drei kombinierbaren Filtern (Kategorie, Status, Lagerort)
- Automatische Hervorhebung kritischer Artikel (Bestand ≤ Mindestbestand)
- Warnungsseite zeigt nur Artikel mit kritischem Bestand
- Einfaches, modernes Business-Layout

---

## Verwendete Technologien

| Technologie | Zweck |
|-------------|-------|
| React 18 | UI-Komponenten |
| TypeScript | Typsicherheit |
| React Router v6 | Seitennavigation |
| Vite | Build-Tool und Entwicklungsserver |

---

## Verfügbare Skripte

| Befehl | Beschreibung |
|--------|--------------|
| `npm run dev` | Entwicklungsserver starten (Port 3000) |
| `npm run build` | Produktions-Build erstellen |
| `npm run preview` | Produktions-Build lokal vorschauen |



## Lagerverwaltungs-App mit Navigation, Suche und Filterung 

### Ausgangslage 

Ein mittelständisches Unternehmen verwaltet verschiedene Artikel in einem Lager. Dazu gehören Verbrauchsmaterial, Ersatzteile und Standardprodukte. Aktuell werden viele Informationen in Excel-Listen gepflegt. Das führt dazu, dass Artikel nicht schnell genug gefunden werden, Bestände unübersichtlich sind und Mitarbeitende Mühe haben, relevante Informationen rasch aufzurufen. 

Deshalb soll eine neue interne Web-Applikation für die Lagerverwaltung entwickelt werden. Die erste Version der Anwendung soll als React-Frontend umgesetzt werden. 

Die Anwendung soll Mitarbeitenden helfen: 

- Artikel schnell zu finden  

- Bestände zu prüfen  

- Artikel nach verschiedenen Kriterien zu filtern  

- zwischen verschiedenen Bereichen der App verständlich zu navigieren  

- Im Zentrum der ersten Ausbaustufe stehen Navigation, Suche und Filterung. 

 

### Ziel der Fallstudie 

Die Studierenden entwickeln ein React-Frontend für eine Lagerverwaltungs-App. 
Dabei sollen sie eine klare Navigation über mehrere Seiten erstellen und auf der Artikelseite eine funktionierende Such- und Filterlogik implementieren-

Fachlicher Kontext 

In der App sollen Artikel mit verschiedenen Eigenschaften verwaltet werden, zum Beispiel: 

Artikelname, Artikelnummer, Kategorie, Lagerort, Bestand, Mindestbestand, Status, 

* Beispielkategorien:

    -  Elektronik  
    -  Verbrauchsmaterial  
    -  Werkzeuge  
    -  Ersatzteile  

* Beispielstatus: 
    - Aktiv  
    - Kritisch  
    - Nicht verfügbar  

* Beispiellagerorte: 
- A1  
- A2  
- B1 
- C3 


# Auftrag 

## Teil 1 – Navigation umsetzen 

Erstellen Sie eine React-Anwendung mit einer klaren Navigation über mehrere Seiten. 
Die Anwendung soll mindestens folgende Seiten enthalten: 

✅ Dashboard  
✅ Artikel  
✅ Warnungen  
✅ Einstellungen  

Anforderungen 

✅ Die Navigation soll auf allen Seiten sichtbar sein.  
✅ Der aktuell aktive Bereich soll erkennbar sein.  
✅ Die Navigation soll für eine Business-App verständlich aufgebaut sein.  
✅ Routing soll mit einer sauberen Seitenstruktur umgesetzt werden.  

## Teil 2 – Artikelseite entwickeln 

✅ Erstellen Sie eine Artikelseite, auf der alle Artikel übersichtlich dargestellt werden. 
✅ Die Artikelliste soll mindestens folgende Informationen anzeigen: 

Artikelname, Artikelnummer, Kategorie, Lagerort, Bestand, Mindestbestand, Status.

### Die Darstellung kann als: 

Tabelle oder Kartenansicht umgesetzt werden. 

## Teil 3 – Suche implementieren 

Auf der Artikelseite soll eine Suchfunktion eingebaut werden.
- Anforderungen an die Suche:

✅ Es soll nach Artikelname gesucht werden können.  
✅ Die Suche soll direkt auf die angezeigten Artikel wirken.  
✅ Die Trefferliste soll sich dynamisch aktualisieren.  
✅ Die Suche soll für den Benutzer klar erkennbar und einfach bedienbar sein.  

## Teil 4 – Filter implementieren 

Zusätzlich zur Suche sollen Filtermöglichkeiten eingebaut werden. 

✅ Mindestens folgende Filter sollen umgesetzt werden: 
Kategorie, Status, Lagerort  

- Anforderungen an die Filter:

✅ Filter sollen mit der Suche kombinierbar sein.  
✅ Es sollen mehrere Filter gleichzeitig angewendet werden können.  
✅ Die Benutzeroberfläche soll verständlich bleiben.  
✅ Es soll klar erkennbar sein, welche Filter aktuell aktiv sind.  

## Teil 5 – Kritische Bestände sichtbar machen 

✅ Artikel mit kritischem Bestand sollen klar erkennbar sein. 

Beispielregel 
Ein Artikel gilt als kritisch, wenn: 
Bestand <= Mindestbestand 

Anforderungen 

✅ Kritische Artikel sollen visuell hervorgehoben werden.  
✅ Die Seite Warnungen soll nur kritische Artikel anzeigen.  

 