# Teil 5 – Usability-Bericht erstellen

# Usability-Bericht – Support-App
## Kernprozess: „Neues Ticket erfassen"

---

## 1. Ziel der Prüfung

**Was wurde geprüft?**
Der Kernprozess „Neues Ticket erfassen" des Mockups bzw. klickbaren Mini-Prototyps einer Support-App wurde auf seine Benutzerfreundlichkeit geprüft.

**Warum wurde es geprüft?**
Bevor die Anwendung weiterentwickelt wird, soll frühzeitig sichergestellt werden, dass der Ablauf für die Nutzer verständlich und sinnvoll aufgebaut ist. Fehler im Design sollen erkannt und behoben werden, bevor Aufwand in die Umsetzung fliesst.

---

## 2. Methode

Es wurden zwei Methoden kombiniert:

- **Heuristische Evaluation** – Der Prototyp wurde anhand der 10 Usability-Heuristiken von Jakob Nielsen systematisch geprüft.
- **Cognitive Walkthrough** – Der Ablauf wurde Schritt für Schritt aus der Perspektive eines ungeübten Nutzers durchgespielt, um die Nachvollziehbarkeit der Benutzerführung zu beurteilen.

---

## 3. Aufgaben

Folgende drei Aufgaben wurden zur Prüfung definiert und bearbeitet:

1. Öffnen Sie den Bereich zum Erfassen eines neuen Tickets.
2. Erfassen Sie ein Ticket mit Titel, Beschreibung und Priorität.
3. Speichern Sie das Ticket und kehren Sie zur Übersicht zurück.

**Ergebnis:** Alle drei Aufgaben konnten fehlerfrei abgeschlossen werden. Das Ticket wurde erfolgreich erstellt.

---

## 4. Beobachtungen

| Bereich | Bewertung | Beobachtung |
|---|---|---|
| Verständlichkeit | ⚠️ Mangelhaft | Die Übersicht der offenen Tickets ist nicht intuitiv aufgebaut. Ein direkter Vergleich zwischen Tickets ist nicht möglich. |
| Navigation | ⚠️ Mangelhaft | Die farbliche Gestaltung erschwert die Orientierung; wichtige Navigationselemente sind schwer erkennbar. |
| Benutzerführung | ✅ Erfüllt | Der geführte Ablauf ist klar und logisch strukturiert. |
| Klarheit der Aktionen | ✅ Erfüllt | Die verfügbaren Aktionen sind verständlich und erkennbar. |
| Rückmeldungen | ❌ Nicht erfüllt | Pflichtfeldmarkierungen, Fehlermeldungen und Erfolgsmeldungen fehlen vollständig. |
| Formularlogik | ✅ Erfüllt | Das geführte Wizard-Prinzip unterstützt den Nutzer gut durch den Erfassungsprozess. |
| Visuelle Hierarchie | ⚠️ Mangelhaft | Während der Ticket-Erfassung ist nicht ersichtlich, wie viele Schritte der Prozess umfasst und in welchem Schritt man sich aktuell befindet. |

---

## 5. Probleme

**Problem 1 – Fehlende Rückmeldungen**
Pflichtfelder sind nicht als solche gekennzeichnet. Es erscheinen weder Fehlermeldungen bei falscher Eingabe noch Erfolgsmeldungen nach dem Speichern. Der Nutzer weiss nicht, ob seine Aktion erfolgreich war.

**Problem 2 – Unklare Ticketübersicht**
Die Darstellung der offenen Tickets ist nicht intuitiv. Ein Vergleich oder eine Priorisierung der Tickets direkt in der Übersicht ist nicht möglich.

**Problem 3 – Fehlende Schrittanzeige im Wizard**
Während der Ticket-Erfassung fehlt eine Fortschrittsanzeige. Der Nutzer weiss nicht, in welchem Schritt er sich befindet und wie viele noch folgen.

**Problem 4 – Unnötige Klicks nach dem Speichern**
Nach dem Erstellen eines Tickets wird der Nutzer nicht automatisch zur Übersicht zurückgeführt. Dies erfordert einen zusätzlichen, unnötigen Klick.

**Problem 5 – Keine Standardwerte vorausgefüllt**
Felder wie Priorität oder Kategorie werden ohne Standardwerte angezeigt, was den Nutzer zwingt, immer alle Felder aktiv zu befüllen.

---

## 6. Priorisierung

| Priorität | Problem | Stufe |
|---|---|---|
| Prio 1 | Bessere Darstellung offener Tickets (Übersicht, Vergleich, Sortierung) | ⚠️ Wichtig |
| Prio 2 | Standardwerte (Default-Daten) in Formularfeldern vorausfüllen | 🟡 Mittel |
| Prio 3 | Leere Tabelle / leere Zustände besser darstellen (z.B. „Keine Tickets vorhanden") | 🟡 Mittel |
| Prio 4 | Unnötige Klicks vermeiden – nach Speichern automatisch zur Übersicht zurück | 🟡 Mittel |
| Prio 5 | Fehlende Rückmeldungen (Pflichtfelder, Fehler- und Erfolgsmeldungen) | ❌ Kritisch |
| Prio 6 | Fehlende Schrittanzeige im Wizard | ⚠️ Wichtig |

---

## 7. Verbesserungsvorschläge

**Zu Prio 1 – Ticketübersicht verbessern**
Die Übersicht sollte klarer strukturiert werden, z.B. mit Spalten für Priorität, Status und Datum. Eine Sortierfunktion und farbliche Kennzeichnung nach Priorität würden die Lesbarkeit deutlich verbessern.

**Zu Prio 2 – Standardwerte vorausfüllen**
Häufig verwendete Werte wie „Mittel" bei der Priorität oder eine Standardkategorie sollten vorausgefüllt sein, damit der Nutzer nur anpassen muss, was abweicht.

**Zu Prio 3 – Leere Zustände kommunizieren**
Wenn noch keine Tickets vorhanden sind, soll eine klare Meldung erscheinen, z.B. „Keine offenen Tickets vorhanden" – anstatt einer leeren Tabelle ohne Erklärung.

**Zu Prio 4 – Automatische Weiterleitung nach Speichern**
Nach erfolgreichem Erstellen eines Tickets soll der Nutzer automatisch zur Übersicht weitergeleitet werden, ohne zusätzlichen Klick.

**Zu Prio 5 – Rückmeldungen einbauen**
Pflichtfelder müssen klar gekennzeichnet sein (z.B. mit Sternchen). Bei Fehleingaben soll eine verständliche Fehlermeldung erscheinen. Nach dem Speichern soll eine Erfolgsmeldung bestätigen, dass das Ticket erstellt wurde.

**Zu Prio 6 – Schrittanzeige im Wizard ergänzen**
Eine Fortschrittsleiste oder Schritt-Anzeige (z.B. „Schritt 2 von 3") soll dem Nutzer jederzeit zeigen, wo er sich im Prozess befindet und wie viele Schritte noch folgen.

---

## **Die 10 Usability-Heuristiken von Jakob Nielsen**

---
✅ Erfüllt ❌ nicht erfüllt ⚠️ Mangelhaft erfüllt

--- 

**1. Sichtbarkeit des Systemstatus** ⚠️

**2. Übereinstimmung mit der realen Welt** ✅

**3. Nutzerkontrolle und Freiheit** ✅

**4. Konsistenz und Standards** ✅

**5. Fehlervermeidung** ❌

**6. Wiedererkennung statt Erinnerung** ✅

**7. Flexibilität und Effizienz** ✅

**8. Ästhetisches und minimalistisches Design** 

**9. Hilfe beim Erkennen, Verstehen und Beheben von Fehlern** ❌

**10. Hilfe und Dokumentation** ❌
