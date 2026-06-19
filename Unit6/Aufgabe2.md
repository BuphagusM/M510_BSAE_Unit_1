# Prototyp validieren und Usability-Bericht erstellen

## Titel

**Validierung eines Prototyps und Erstellung eines Usability-Berichts**

---

## Ausgangslage

Ein erster Entwurf für eine Support-App wurde bereits erstellt. Der Kernprozess „Neues Ticket erfassen" liegt als Mockup bzw. klickbarer Mini-Prototyp vor.

Bevor die Anwendung weiterentwickelt wird, soll nun geprüft werden, ob dieser Entwurf für die Nutzer verständlich und sinnvoll aufgebaut ist. 
Dazu wird der Prototyp validiert und die Ergebnisse werden in einem kurzen Usability-Bericht dokumentiert.

---

## Ziel der Übung

Sie prüfen einen vorhandenen Prototypen oder den in Übung 1 erstellten Ablauf systematisch und halten die Erkenntnisse in einem kompakten Usability-Bericht fest.

Dabei sollen Sie zeigen, dass Sie:

- einen Entwurf anhand konkreter Aufgaben prüfen können
  - Die Aufgabe kann Fehlerfrei erledigt werden. Das Ticket wird erstellt.
- Usability-Probleme erkennen
  - Die Übersicht der Offenen Tickets ist eher nicht intuitiv. Auch ein Vergleich der Tickets ist nicht möglich.
  - Eine Priorisierung der Tickets ist nicht möglich.
- Beobachtungen strukturiert dokumentieren (siehe unten au wie eine Vorgehensweise sein muss)
- Probleme priorisieren 
  - Prio 1 Bessere Darstellung offener Tickets, 
  - Prio 2 Default Daten laden, 
  - Prio 3 Leere Tabelle besser darstellen
  - Prio 4 Unnötige Klicks vermeiden. (Ticket erstellt, automatisch zurück zur Übersicht)
- sinnvolle Verbesserungsvorschläge ableiten (siehe Prio oben)

---

## Vorgehensweise: Usability-Prüfung & Bericht Template (Ich mache das mal für mich ohne Aufschreiben)

**Schritt 1 – Ziel definieren**
Was genau wird geprüft? Welcher Ablauf, welche Seite, welche Funktion? Warum wird es geprüft?

**Schritt 2 – Methode wählen**
Die gängigsten:

- **Heuristische Evaluation** – Experte prüft anhand Nielsens 10 Regeln
- **Cognitive Walkthrough** – Schritt-für-Schritt durch Aufgaben denken wie ein Anfänger
- **Usability-Test mit Testpersonen** – echte Nutzer beobachten
- **Think-Aloud-Methode** – Testperson denkt laut beim Benutzen
- **Aufgabenbasierte Prüfung** – konkrete Szenarien durchspielen

**Schritt 3 – Aufgaben definieren**
2–3 realistische Aufgaben formulieren, z.B. „Erfasse ein neues Ticket mit Titel und Priorität."

**Schritt 4 – Prüfung durchführen**
Prototyp systematisch durchgehen, Beobachtungen notieren. Nichts interpretieren – nur aufschreiben was passiert.

**Schritt 5 – Probleme dokumentieren**
Jedes Problem festhalten mit:
- Wo tritt es auf?
- Was ist das Problem?
- Warum ist es ein Problem?

**Schritt 6 – Probleme priorisieren**
| Stufe | Bedeutung |
|---|---|
| ❌ Kritisch | Nutzer kann Aufgabe nicht abschliessen |
| ⚠️ Wichtig | Nutzer hat grosse Mühe |
| 🟡 Mittel | Nutzer ist verwirrt, schafft es aber |
| ✅ Gering | Kleiner Schönheitsfehler |

**Schritt 7 – Verbesserungsvorschläge ableiten**
Zu jedem Problem einen konkreten Vorschlag formulieren – nicht nur kritisieren, sondern lösen.

**Schritt 8 – Bericht schreiben**
Struktur des Berichts:
1. Ziel der Prüfung
2. Methode
3. Aufgaben
4. Beobachtungen
5. Probleme
6. Priorisierung
7. Verbesserungsvorschläge

---

Für deine Übung reicht die **heuristische Evaluation** kombiniert mit einem **Cognitive Walkthrough** – das ist ohne echte Testpersonen machbar und trotzdem methodisch sauber.

**Die 10 Usability-Heuristiken von Jakob Nielsen**

---

**1. Sichtbarkeit des Systemstatus**
Die App zeigt dem Nutzer immer, was gerade passiert – z.B. eine Ladeanimation, eine Erfolgsmeldung nach dem Speichern, oder eine Fortschrittsanzeige.

**2. Übereinstimmung mit der realen Welt**
Die App spricht die Sprache des Nutzers – keine Fachbegriffe oder technischen Codes. Begriffe und Konzepte sollen sich anfühlen wie im echten Leben.

**3. Nutzerkontrolle und Freiheit**
Nutzer machen Fehler – sie brauchen einen einfachen Weg zurück. Klarer „Abbrechen"- oder „Rückgängig"-Button, kein Falle-Gefühl.

**4. Konsistenz und Standards**
Gleiche Dinge sehen immer gleich aus und funktionieren gleich. Ein „Speichern"-Button ist immer am gleichen Ort, immer gleich beschriftet.

**5. Fehlervermeidung**
Besser als eine gute Fehlermeldung ist ein Design, das Fehler von vornherein verhindert – z.B. Pflichtfelder markieren, bevor der Nutzer abschickt.

**6. Wiedererkennung statt Erinnerung**
Der Nutzer soll nicht auswendig lernen müssen, wie die App funktioniert. Optionen, Aktionen und Infos sollen sichtbar und offensichtlich sein.

**7. Flexibilität und Effizienz**
Anfänger und Profis sollen beide gut zurechtkommen. Experten brauchen Abkürzungen (Shortcuts), Anfänger brauchen klare Führung.

**8. Ästhetisches und minimalistisches Design**
Nur das Nötigste anzeigen. Jede unnötige Information lenkt ab und schwächt die wichtigen Inhalte.

**9. Hilfe beim Erkennen, Verstehen und Beheben von Fehlern**
Fehlermeldungen sollen klar sagen, was falsch gelaufen ist – in einfacher Sprache, nicht als Fehlercode – und einen Lösungsweg aufzeigen.

**10. Hilfe und Dokumentation**
Idealerweise braucht die App keine Anleitung. Falls doch, soll die Hilfe leicht zu finden, kurz und aufgabenorientiert sein.

---

Für deine Support-App kannst du diese 10 Punkte direkt als Checkliste nutzen und bei jedem Punkt notieren, ob der Prototyp das erfüllt oder nicht.



---

## Auftrag

### Teil 1 – Prototyp prüfen

Prüfen Sie den Prototypen zum Ablauf „Neues Ticket erfassen".

Nutzen Sie dazu mindestens eine einfache Validierungsmethode, zum Beispiel:

- **Heuristische Evaluation** 
  - Du gehst den Prototyp alleine durch und prüfst ihn anhand der 10 Usability-Regeln von Nielsen.

- **Kurzer Walkthrough** 
  - Du spielst Schritt für Schritt eine typische Aufgabe durch und fragst dich bei jedem Schritt, ob der nächste Schritt für einen Anfänger logisch und verständlich ist.

- **Kleine Aufgabenprüfung** 
  - Du definierst 2–3 konkrete Aufgaben und prüfst, ob der Prototyp diese Aufgaben ohne Probleme ermöglicht.

- **Beobachtung einer Testperson oder eines Gruppenmitglieds** 
  - Du schaust jemandem zu, wie er den Prototyp benutzt, ohne einzugreifen, und notierst wo er zögert, Fehler macht oder verwirrt wirkt.

---

### Teil 2 – Aufgaben definieren oder bearbeiten

Arbeiten Sie mit 2–3 konkreten Aufgaben, zum Beispiel:

1. Öffnen Sie den Bereich zum Erfassen eines neuen Tickets.
2. Erfassen Sie ein Ticket mit Titel, Beschreibung und Priorität.
3. Speichern Sie das Ticket und kehren Sie zur Übersicht zurück.

---

### Teil 3 – Probleme identifizieren

Dokumentieren Sie mindestens 4 Usability-Probleme oder Schwächen.

Achten Sie dabei zum Beispiel auf:

Punkte werden mit folgenden Emojis bewertet: ✅ Erfüllt ❌ nicht erfüllt ⚠️ Mangelhaft erfüllt

- ⚠️ Verständlichkeit (Tabelle offene Tickets ist nicht intuitiv, Vergleich der Tickets nicht möglich)
- ⚠️ Navigation (Farblich eher schwer zu erkennen)
- ✅ Benutzerführung
- ✅ Klarheit der Aktionen
- ❌ Rückmeldungen (Pflichtfelder, Fehlermeldungen und Erfolgsmeldungen fehlen total)
- ✅ Formularlogik (geführtes Wizzard)
- ⚠️ visuelle Hierarchie (Während des Erfassens eines Tickets ist nicht klar wieviele Schritte es gibt und in welchem Schritt man sich befindet)

---

### Teil 4 – Probleme priorisieren

Ordnen Sie die gefundenen Probleme nach Wichtigkeit ein, zum Beispiel:

- **kritisch**
- **wichtig**
- **mittel**
- **gering**

> Siehe Prio Liste Aufgabe 1!

---

### Teil 5 – Usability-Bericht erstellen

Erstellen Sie einen kurzen Usability-Bericht mit mindestens folgenden Bereichen:

#### 1. Ziel der Prüfung

- Was wurde geprüft?
- Warum wurde es geprüft?

#### 2. Methode

- Wie wurde geprüft?
- Welche Methode wurde verwendet?

#### 3. Aufgaben

- Welche Aufgaben wurden bearbeitet?

#### 4. Beobachtungen

- Was ist aufgefallen?
- Wo gab es Unsicherheiten oder Fehler?

#### 5. Probleme

- Welche konkreten Probleme wurden festgestellt?

#### 6. Priorisierung

- Wie wichtig sind die einzelnen Probleme?

#### 7. Verbesserungsvorschläge

- Wie könnte der Entwurf verbessert werden?