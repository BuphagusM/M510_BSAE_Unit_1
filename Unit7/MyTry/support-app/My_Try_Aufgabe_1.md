# Teil 1 – Testmethode festlegen


## Welche
- Erst wählen wir die Moderierter Mini-Usability-Test mit Testperson.
- Als zweites machen wir die Cognitive Walkthrough Methode, der angehende Entwickler macht jeden Schritt selber.

## Warum

# Moderierter Mini-Usability-Test

Eine moderierte Methode, bei der eine Testperson realistische Aufgaben an einem System ausführt, während ein Moderator beobachtet und Notizen macht. Ziel ist es, Usability-Probleme direkt im Nutzerverhalten zu entdecken – nicht durch Meinungen, sondern durch Beobachtung.

**Wann einsetzen:** Frühe bis mittlere Designphase, bei konkreten Prototypen oder live Systemen.

---

## Was beobachten & festhalten

**Verhalten**
- Wo zögert die Person? Wo sucht sie?
- Welche Elemente werden ignoriert, übersehen, missverstanden?
- Gibt es unerwartete Klickpfade?

**Think-Aloud**
- Was sagt die Person laut? (Erwartungen, Verwirrung, Frustration)
- Zitate wörtlich notieren – sie sind Gold wert

**Fehler & Probleme**
- Was geht schief? Wie reagiert die Person darauf?
- Schweregrad einschätzen: 1 (kosmetisch) → 5 (blockierend)

**Emotionen & Körpersprache**
- Frustration, Überraschung, Unsicherheit, Zufriedenheit

**Aufgaben-Ergebnis**
- Erfüllt / Teilweise erfüllt / Nicht erfüllt
- Benötigte Zeit
- Wurde Hilfe benötigt?

---

## Was diese Methode aussagt

- Zeigt **wo** und **wie** Nutzer scheitern – nicht nur ob
- Deckt auf, ob mentales Modell der Nutzer mit dem Design übereinstimmt
- Liefert qualitative Tiefe: Warum passiert etwas?
- Bereits **5 Testpersonen** reichen, um ~85% der Hauptprobleme zu finden

**Nicht geeignet für:** statistische Aussagen, grosse Nutzerzahlen, rein quantitative Vergleiche.

# Cognitive Walkthrough

Eine expertenbasierte Inspektionsmethode, bei der Evaluatoren ein Interface Schritt für Schritt aus der Perspektive eines neuen Nutzers durchgehen – ohne echte Testpersonen. Für jeden Schritt werden 4 Leitfragen beantwortet.

**Wann einsetzen:** Frühe Designphase, bei Mockups oder Prototypen, wenn kein Zugang zu Testpersonen möglich ist.

---

## Die 4 Leitfragen (für jeden Schritt)

| # | Frage | Kern |
|---|---|---|
| **F1** | Wird der Nutzer versuchen, das richtige Ziel zu erreichen? | Ist das Ziel überhaupt klar erkennbar? |
| **F2** | Wird der Nutzer die richtige Aktion bemerken? | Ist der Button / Link / das Feld auffindbar? |
| **F3** | Wird der Nutzer erkennen, dass die Aktion zum Ziel führt? | Passt die Bezeichnung zum erwarteten Ergebnis? |
| **F4** | Bekommt der Nutzer nach der Aktion angemessenes Feedback? | Ist der neue Systemzustand verständlich kommuniziert? |

---

## Was pro Schritt festhalten

- Schritt-Beschreibung + erwartete Nutzeraktion
- Antwort auf F1–F4: Ja / Nein / Teilweise + kurze Begründung
- Gefundenes Problem (falls vorhanden)
- Verbesserungsvorschlag

---

## Was diese Methode aussagt

- Zeigt ob ein Interface für **neue oder unerfahrene Nutzer** erlernbar ist
- Fokus auf **Learnability** – nicht auf Effizienz oder Zufriedenheit
- Günstig und schnell: kein Recruiting, keine Sessions nötig
- Findet strukturelle Navigationsprobleme und unklare Beschriftungen

**Nicht geeignet für:** subjektives Nutzererlebnis, emotionale Reaktionen, komplexe Workflows mit vielen Nutzervarianten.