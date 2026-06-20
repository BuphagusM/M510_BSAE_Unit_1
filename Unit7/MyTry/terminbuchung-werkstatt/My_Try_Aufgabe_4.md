# UX-Validierungsbericht
**Terminbuchungs-Applikation – Werkstatt** | Moderierter Mini-Usability-Test

---

## 1. Ziel

Ziel der Evaluation war es, den Buchungsflow der Terminbuchungs-Applikation auf Usability-Probleme zu untersuchen. Im Fokus stand die Frage, ob Nutzer ohne Vorkenntnisse einen Termin selbstständig erfassen, abschliessen und bestätigt sehen können – von der Startseite bis zur Bestätigungsseite.

---

## 2. Grundlage

Die Beobachtungen stammen aus einem moderierten Mini-Usability-Test vom 05. Juni 2024 mit **3 Testpersonen**. Die Testpersonen führten drei definierte Aufgaben am Prototyp durch (Übersicht verschaffen, Termin buchen, Buchung prüfen und zurücknavigieren), während Moderator und Beobachter Verhalten, Zögern, Fehler und Think-Aloud-Aussagen protokollierten. Die Notizen wurden direkt während der Session erfasst und anschliessend strukturiert ausgewertet.

---

## 3. Erkenntnisse / Probleme

**E1 – Einstiegspunkt in den Buchungsflow nicht auffindbar**
2 von 3 Testpersonen fanden den Button «Neuen Termin buchen» nicht sofort. Eine Person suchte in der Navigation, eine andere scrollte zufällig darüber. Der Startpunkt des wichtigsten Workflows war nicht prominent genug platziert.

**E2 – Pflichtfelder im Formular nicht gekennzeichnet**
1 von 3 Testpersonen versuchte das Formular ohne Fahrzeugmodell abzusenden und war überrascht von der Fehlermeldung. Pflichtfelder waren nicht als solche markiert – Fehler entstanden reaktiv statt präventiv.

**E3 – Visuelle Hierarchie im Formular unklar**
2 von 3 Testpersonen zögerten beim Abschicken des Formulars. Der Absende-Button hob sich visuell nicht genug ab; eine Person war zudem unsicher ob «Buchen» oder «Speichern» der richtige Begriff ist.

**E4 – Bestätigungsseite kommuniziert Erfolg nicht eindeutig**
1 von 3 Testpersonen fragte nach der Buchung nach, ob noch eine Bestätigung komme. Alle drei empfanden die Seite als unscheinbar. Die Rückmeldung war vorhanden, aber zu schwach gewichtet.

**E5 – Rücknavigation nach Buchung nur als Textlink**
2 von 3 Testpersonen suchten nach der Buchung aktiv nach einem Weg zurück. Eine Person nutzte den Browser-Zurück-Button, da der Textlink nicht als Aktion erkannt wurde.

**E6 – Datum- und Uhrzeitfelder unklar beschriftet**
2 von 3 Testpersonen waren unsicher, ob Datum oder Uhrzeit zuerst einzutragen ist, ob ein Kalender erscheint oder ein Format eingehalten werden muss.

**E7 – Terminübersicht funktioniert gut** ✓
Alle 3 Testpersonen konnten die Übersicht schnell erfassen. Darstellung mit Name, Datum und Fahrzeug wurde als sinnvoll empfunden, kein Suchbedarf.

**E8 – Statusanzeigen werden korrekt verstanden** ✓
«Bestätigt», «Gebucht» und «Ausstehend» wurden von allen 3 Testpersonen ohne Nachfrage richtig interpretiert. Die farbliche Unterscheidung der Badges wurde positiv wahrgenommen.

---

## 4. Priorisierung

| Priorität | Problem | Betroffene | Begründung |
|---|---|---|---|
| 🔴 Kritisch | E1 – Buchungs-CTA nicht auffindbar | 2/3 | Hauptaufgabe kann nicht gestartet werden |
| 🟡 Wichtig | E3 – Visuelle Hierarchie im Formular | 2/3 | Hauptaktion nicht erkennbar, Nutzer bricht möglicherweise ab |
| 🟡 Wichtig | E5 – Rücknavigation als Textlink | 2/3 | Orientierung nach Buchung fehlt, Browser-Back als Ausweg |
| 🟡 Wichtig | E6 – Zeitfelder unklar | 2/3 | Fehleingaben und Unsicherheit bei der Datumswahl |
| 🟠 Mittel | E2 – Pflichtfelder nicht gekennzeichnet | 1/3 | Fehlermeldung erscheint unerwartet – vermeidbar durch klare Markierung |
| 🟠 Mittel | E4 – Bestätigung unklar | 1/3 | Vertrauen in die Applikation wird untergraben, obwohl Meldung vorhanden |

E1 bleibt kritisch, da er den Einstieg in den Kernflow blockiert. E2 und E4 wurden auf Mittel zurückgestuft, da jeweils nur 1 von 3 Personen betroffen war.

---

## 5. Anpassungen

| Was | Wo | Warum |
|---|---|---|
| Button «Neuen Termin buchen» oben auf der Startseite prominent platziert | Startseite | 2/3 Personen fanden den Einstiegspunkt nicht auf Anhieb |
| Absende-Button vergrössert, farblich hervorgehoben und als «Termin buchen» beschriftet | Buchungsformular | 2/3 Personen zögerten – Hauptaktion war visuell nicht unterscheidbar |
| Textlink durch Schaltfläche «Zurück zur Übersicht» ersetzt | Bestätigungsseite | 2/3 Personen nutzten Browser-Back, da der Link nicht als Aktion erkannt wurde |
| Datum- und Uhrzeitfelder mit Beispielwerten und klarerer Beschriftung versehen | Buchungsformular | 2/3 Personen unsicher über Format und Reihenfolge der Eingabe |
| Pflichtfelder mit * und kurzem Hinweistext versehen | Buchungsformular | 1/3 Personen erhielt Fehlermeldung ohne vorherigen Hinweis |
| Bestätigungsseite mit auffälligem Erfolgssymbol und Bestätigungstext ergänzt | Bestätigungsseite | 1/3 Personen unsicher ob Buchung wirklich gespeichert wurde |

---

## 6. Erwartete Verbesserung

Mit den vorgenommenen Anpassungen sollte der Buchungsflow für neue Nutzer deutlich verständlicher und fehlerfreier durchführbar sein. Der prominente CTA ermöglicht einen klaren Einstieg ohne Suchen. Die Pflichtfeldkennzeichnung reduziert Fehler proaktiv. Die verbesserte visuelle Hierarchie führt den Nutzer gezielt zur Hauptaktion. Die überarbeitete Bestätigungsseite schliesst den Flow mit einer eindeutigen Rückmeldung ab.

Die bereits funktionierenden Bereiche – Terminübersicht und Statusanzeigen – wurden bewusst nicht verändert, da sie von allen 3 Testpersonen problemlos genutzt wurden.

Insgesamt wird erwartet, dass die Abschlussrate der Kernaufgabe steigt und die Anzahl der Fehler und Abbrüche im Buchungsformular deutlich sinkt.