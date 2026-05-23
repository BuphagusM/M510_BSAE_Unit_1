# React & TypeScript – Lernnotizen

> Nachschlagewerk aus der Entwicklung der `course-management-app`

---

## Inhaltsverzeichnis
1. [TypeScript / Grundlagen](#1-typescript--grundlagen)
2. [React Konzepte](#2-react-konzepte)
3. [Hooks](#3-hooks)
4. [Context – Globaler State](#4-context--globaler-state)
5. [HTTP & Services](#5-http--services)
6. [Architektur & Schichtentrennung](#6-architektur--schichtentrennung)
7. [Express Backend](#7-express-backend)
8. [HTTP Status Codes](#8-http-status-codes)
9. [Git & Tooling](#9-git--tooling)

---

## 1. TypeScript / Grundlagen

### Objekt-Destructuring
```typescript
// Eigenschaft direkt übernehmen
const { courses } = useCourses()

// Eigenschaft umbenennen (Alias)
const { courses: meineListe } = useCourses()

// Typ-Annotation beim Destructuring
const { courses }: { courses: CourseDTO[] } = useCourses()
// Besser: Typ wird automatisch inferiert → kein Typ nötig
const { courses } = useCourses()
```

### Import-Varianten
```typescript
// Named Import – nur bestimmte Exports
import { useState, useEffect } from 'react'

// Default Import – das Haupt-Export
import React from 'react'

// Alias beim Import
import { courses as meineListe } from './useCourses'
```

### `esModuleInterop` in tsconfig.json
Ohne `esModuleInterop: true` kann man CommonJS-Module (z.B. Express) nicht
als Default-Import verwenden:
```typescript
// ❌ Fehler ohne esModuleInterop
import express from 'express'

// ✅ Lösung: tsconfig.json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```

### console.log vs console.info
| Methode | Zweck |
|---|---|
| `console.log` | Temporäres Debugging |
| `console.info` | Bewusste, dauerhafte Log-Ausgaben (wie `log.info` in Java Spring Boot) |

In Node.js technisch identisch – im Browser zeigt `console.info` ein ℹ️ Icon.

---

## 2. React Konzepte

### Components – Wiederverwendbare UI-Bausteine
```tsx
// Funktionskomponente mit TypeScript
function CourseCard({ title, status }: { title: string, status: string }): React.ReactElement {
    return (
        <div className="card">
            <h2>{title}</h2>
            <span>{status}</span>
        </div>
    )
}

// Verwendung
<CourseCard title="React Kurs" status="active" />
```

### Props – Daten von Eltern zu Kind
```tsx
// Props-Interface definieren
interface CourseCardProps {
    title: string
    status: 'active' | 'inactive'
    onDelete: (id: number) => void
}

function CourseCard({ title, status, onDelete }: CourseCardProps) {
    return <button onClick={() => onDelete(1)}>{title}</button>
}
```

### Conditional Rendering
```tsx
// Ternärer Operator
{course ? <Detail course={course} /> : <p>Nicht gefunden</p>}

// Kurzschluss-Operator (nur anzeigen wenn true)
{isLoading && <Spinner />}

// Optional Chaining
<span>{course?.title}</span>
```

### Lists & Keys
```tsx
// key ist Pflicht – React erkennt damit Änderungen in der Liste
{courses.map(course => (
    <tr key={course.id}>
        <td>{course.title}</td>
    </tr>
))}
```

### onClick – Event Handling
```tsx
// Inline ohne Parameter
<button onClick={() => console.log('Hallo Welt')}>Klick mich</button>

// Mit separater Funktion (empfohlen bei komplexerer Logik)
const handleDelete = (id: number) => {
    deleteCourse(id)
}
<button onClick={() => handleDelete(course.id)}>Löschen</button>

// WICHTIG: () => ist nötig wenn Parameter übergeben werden!
// Ohne () => würde handleDelete sofort beim Rendern aufgerufen
<button onClick={handleDelete}>    // ✅ Nur wenn KEINE Parameter
<button onClick={() => handleDelete(course.id)}>  // ✅ MIT Parametern
```

---

## 3. Hooks

> **Regel:** Hooks dürfen NUR in React-Komponenten oder Custom Hooks aufgerufen werden – nie in normalen Funktionen!

### useState – Lokaler State
```typescript
const [courses, setCourses] = useState<CourseDTO[]>([])
const [isLoading, setIsLoading] = useState(false)

// State aktualisieren
setCourses(data)

// State basierend auf vorherigem Wert (sicher bei async!)
setCourses(prev => prev.filter(c => c.id !== courseId))
```

### useEffect – Seiteneffekte / Lifecycle
```typescript
// Beim ersten Render ausführen (wie componentDidMount)
useEffect(() => {
    fetchCourses()
        .then(data => setCourses(data))
        .catch(err => console.error(err))
}, [])  // ← leeres Array = nur einmal beim Start

// Bei Änderung einer Abhängigkeit
useEffect(() => {
    fetchCourseById(id)
}, [id])  // ← läuft erneut wenn id sich ändert
```

### useNavigate – Programmatische Navigation (React Router)
```typescript
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()

// Nach Aktion navigieren
deleteCourse(course.id)
    .then(() => navigate('/courses'))
```

### useParams – URL-Parameter lesen (React Router)
```typescript
import { useParams } from 'react-router-dom'

// URL: /courses/42
const { id } = useParams<{ id: string }>()
const course = courses.find(c => c.id === Number(id))
```

### useContext – Context verwenden
```typescript
// Eigener Hook als Wrapper (empfohlen)
const { showToast } = useToast()
showToast('Erfolgreich gelöscht!', 'success')
```

### Custom Hooks – Eigene wiederverwendbare Logik
```typescript
// useCourses.ts – verwaltet Kurs-State + Aktionen
export const useCourses = () => {
    const [courses, setCourses] = useState<CourseDTO[]>([])

    useEffect(() => {
        fetchCourses()
            .then(data => setCourses(data))
            .catch(err => console.error(err))
    }, [])

    const deleteCourse = (courseId: number): Promise<void> => {
        return fetchRemoveCourseById(courseId)
            .then(() => setCourses(prev => prev.filter(c => c.id !== courseId)))
    }

    return { courses, deleteCourse }
}

// Verwendung in einer Komponente
const { courses, deleteCourse } = useCourses()
```

### Was ein Hook technisch ist – kein Class, kein Interface!

Ein Hook ist eine **Funktion die ein Objekt zurückgibt** – kein `class`, kein `interface`.

```typescript
// useCourses ist eine Konstante die eine FUNKTION ist
export const useCourses = () => {       // ← das ist eine Funktion

    const [courses, setCourses] = useState([])   // ← innere Konstante (State)

    const deleteCourse = (id: number) => {        // ← innere Konstante (Funktion)
        return fetchRemoveCourseById(id)
            .then(() => setCourses(...))
    }

    return { courses, deleteCourse }    // ← gibt ein Objekt zurück
}
```

### Vergleich zu Java

```java
// Java – Klasse mit Instanz
CourseService service = new CourseService();
service.deleteCourse(1);
List<Course> courses = service.getCourses();
```

```typescript
// React Hook – Funktion die aufgerufen wird
const { courses, deleteCourse } = useCourses()
//     ↑ direkt verwendbar, kein "new", kein Objekt erstellen
deleteCourse(1)
```

| | Java | React Hook |
|---|---|---|
| **Definition** | `class CourseService {}` | `const useCourses = () => {...}` |
| **Instanz** | `new CourseService()` | nicht nötig – einfach aufrufen |
| **Verwenden** | `service.deleteCourse()` | `const { deleteCourse } = useCourses()` |
| **Geteilt?** | Singleton möglich | Jeder Aufruf = eigene Instanz |

### Wiederverwendung in mehreren Komponenten

```typescript
// Courses.tsx
const { courses, deleteCourse } = useCourses()

// CourseDetail.tsx
const { courses, deleteCourse } = useCourses()

// Dashboard.tsx – nur was man braucht
const { courses } = useCourses()
```

> ⚠️ **Wichtig:** Jede Komponente die `useCourses()` aufruft bekommt ihren **eigenen State**.
> `courses` in `Courses.tsx` und `courses` in `CourseDetail.tsx` sind **unabhängig** –
> beide machen einen eigenen HTTP-Request.
>
> Wenn du denselben State **teilen** willst → **Context** verwenden.

```
Courses.tsx      → useCourses() → eigener [courses] State
CourseDetail.tsx → useCourses() → eigener [courses] State  (unabhängig!)
Dashboard.tsx    → useCourses() → eigener [courses] State  (unabhängig!)
```

### Regel: Invalid Hook Call
```typescript
// ❌ FALSCH – Hooks in normaler Funktion
export const deleteCourse = (id: number) => {
    const [status, setStatus] = useState('')  // 💥 Fehler!
}

// ✅ RICHTIG – Hooks nur im Custom Hook oder Komponente
export const useCourses = () => {
    const [courses, setCourses] = useState([])  // ✅
    const deleteCourse = (id: number) => { ... } // normale Funktion im Hook
    return { courses, deleteCourse }
}
```

### Hook vs. normale Funktion – Faustregel
> Braucht die Funktion `useState`, `useEffect` o.ä. → **Custom Hook** (mit `use` benennen)
> Ist es eine einfache Aktion ohne React-State → **normale Funktion**

---

## 4. Context – Globaler State

Löst das Problem: State muss nicht durch viele Ebenen als Props durchgereicht werden.

### Beispiel: Toast-Benachrichtigungen
```tsx
// ToastContext.tsx – Definition
import React, { createContext, useCallback, useContext, useState } from 'react'

export type ToastType = 'success' | 'error'

interface ToastContextValue {
    showToast: (message: string, type: ToastType) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

// Provider – umhüllt die App
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([])

    const showToast = useCallback((message: string, type: ToastType) => {
        const id = Date.now()
        setToasts(prev => [...prev, { id, message, type }])
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id))
        }, 10000)  // ← nach 10 Sekunden automatisch entfernen
    }, [])

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Toast-UI hier rendern */}
        </ToastContext.Provider>
    )
}

// Custom Hook für einfachen Zugriff
export const useToast = () => {
    const context = useContext(ToastContext)
    if (!context) throw new Error('useToast muss innerhalb eines ToastProvider verwendet werden')
    return context
}
```

```tsx
// App.tsx – Provider einbinden (einmal ganz oben)
<ToastProvider>
    <div className="app-container">
        ...
    </div>
</ToastProvider>
```

```tsx
// In jeder Komponente verwenden
const { showToast } = useToast()

deleteCourse(id)
    .then(() => showToast(`Kurs erfolgreich gelöscht`, 'success'))
    .catch(() => showToast(`Fehler beim Löschen`, 'error'))
```

---

## 5. HTTP & Services

### Service-Funktionen (reines TypeScript, kein React)
```typescript
// courses-data-http-request.ts
export const fetchCourses = async (): Promise<CourseDTO[]> => {
    const response = await fetch('http://localhost:3001/api/v1/courses')
    if (!response.ok) {
        throw new Error(`Fehler: ${response.status}`)
    }
    return response.json() as Promise<CourseDTO[]>
}

export const fetchRemoveCourseById = async (courseId: number): Promise<void> => {
    const response = await fetch(`http://localhost:3001/api/v1/courses/${courseId}`, {
        method: 'DELETE',
    })
    if (!response.ok) {
        throw new Error(`Fehler beim Löschen: ${response.status}`)
    }
}
```

### Promise-Verkettung (.then / .catch)
```typescript
deleteCourse(course.id)
    .then(() => {
        showToast('Erfolgreich gelöscht', 'success')
        navigate('/courses')
    })
    .catch(() => showToast('Fehler beim Löschen', 'error'))
```

### Schichtentrennung (wie Spring Boot)
```
Komponente  (React)       →  wie Controller
Custom Hook (React)       →  wie Service
fetch-Funktion (TypeScript) →  wie Repository
```

---

## 6. Architektur & Schichtentrennung

### HTTP-Requests aus dem Hook auslagern – sinnvoll oder unnötig?

**Es ist üblich und empfohlen**, HTTP-Requests in separate Funktionen auszulagern:

| Vorteil | Erklärung |
|---|---|
| **Single Responsibility** | Hook = State, Service = HTTP |
| **Testbarkeit** | Service-Funktion ohne React testbar |
| **Wiederverwendbarkeit** | `fetchCourses` in mehreren Hooks nutzbar |

```typescript
// Variante A – empfohlen (deine Lösung)
hooks/useCourses.ts              ← State + Logik
services/courses-http-request.ts ← HTTP

// Variante B – alles im Hook (kleinere Projekte, weniger testbar)
export const useCourses = () => {
    useEffect(() => {
        fetch('/api/courses').then(r => r.json()).then(setCourses)
    }, [])
}
```

### Warum Hook + Service-Funktion getrennt?

| Schicht | Datei | Enthält |
|---|---|---|
| **Komponente** | `Courses.tsx` | JSX, Event-Handler |
| **Custom Hook** | `useCourses.ts` | State, Lifecycle, Aktionen |
| **Service** | `courses-data-http-request.ts` | HTTP-Requests |

### Custom Hook vs. normale Funktion im Service
```typescript
// Custom Hook – braucht React State
export const useCourses = () => {
    const [courses, setCourses] = useState([])  // ← React nötig
    ...
}

// Service-Funktion – kein React, nur fetch
export const fetchCourses = async () => {
    return fetch('/api/courses').then(r => r.json())  // ← reines TS
}
```

### Angular Vergleich
| React | Angular |
|---|---|
| Custom Hook (`useCourses`) | Service mit `@Injectable` |
| Service-Funktion (`fetchCourses`) | `HttpClient`-Methode im Service |
| Komponente | Component |
| Context | Service mit `providedIn: 'root'` |

---

## 7. Express Backend

### Setup mit TypeScript
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "esModuleInterop": true,
    "strict": true
  }
}
```

### API-Key Middleware (Schutz)
```typescript
// server.ts
const apiKeyMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const clientKey = req.headers['x-api-key']
    if (clientKey !== process.env.API_KEY) {
        return res.status(401).json({ error: 'Unauthorized' })
    }
    next()
}

// Gezielt für eine Route (empfohlen)
app.get('/api/v1/dashboard', apiKeyMiddleware, getDashboardDetails)

// Für alle Routen
app.use(apiKeyMiddleware)
```

### API-Key im Frontend senden
```typescript
fetch('http://localhost:3001/api/v1/dashboard', {
    headers: { 'x-api-key': 'mein-key' }
})
```

### return bei res.json()
```typescript
// Optional aber empfohlen – verhindert "headers already sent" Fehler
return res.status(200).json(data)
return res.status(500).json({ error: 'Fehler' })
```

---

## 8. HTTP Status Codes

| Code | Bedeutung | Wann? |
|---|---|---|
| `200 OK` | Erfolgreich, neue Daten | Erster Request |
| `304 Not Modified` | Daten unverändert, Cache nutzen | Wiederholter Request, gleiche Daten |
| `401 Unauthorized` | Kein/falscher API-Key | Fehlende Authentifizierung |
| `500 Internal Server Error` | Serverfehler | Unbekannter Fehler im Backend |

### 304 Not Modified – kein Fehler!
Express setzt automatisch einen `ETag`-Header. Beim zweiten Request mit gleichen
Daten antwortet der Server mit 304 – der Browser nutzt den Cache. Das ist **gewolltes Verhalten**.

```typescript
// Deaktivieren (nur für Entwicklung/Testing sinnvoll)
app.set('etag', false)
```

---

## 9. Git & Tooling

### .gitignore – Eine Datei für den ganzen Workspace
```gitignore
# Dependencies
**/node_modules/

# Environment variables – NIEMALS ins Git!
**/.env
**/.env*
**/*.env
**/*.env.*

# IntelliJ / JetBrains
**/.idea/
**/*.iml

# VS Code
**/.vscode/

# macOS
**/.DS_Store

# Build
**/dist/
**/build/
```

> `**/` am Anfang = gilt rekursiv für alle Unterordner

### .env – Geheimnisse schützen
```bash
# .env (NIE ins Git!)
API_KEY=mein-geheimer-schluessel

# Im Code lesen
process.env.API_KEY
```

### package-lock.json – ins Git oder nicht?
**Ja, ins Git lassen!**
- Stellt sicher dass alle Entwickler exakt dieselben Paketversionen verwenden
- Nur bei npm-Libraries (die andere nutzen) weglassen

---

## Schnellreferenz: Wann was verwenden?

| Situation | Lösung |
|---|---|
| Daten laden und anzeigen | Custom Hook mit `useState` + `useEffect` |
| Nach Aktion navigieren | `useNavigate()` |
| URL-Parameter lesen | `useParams()` |
| Globale Meldung anzeigen | Context (`useToast()`) |
| Einfacher HTTP-Request | Service-Funktion (reines TS) |
| Logik ohne State | Normale Funktion |
| State durch viele Ebenen | Context |

