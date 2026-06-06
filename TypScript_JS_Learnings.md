## Die wichtigsten Array-Methoden in JavaScript

| Methode | Rückgabe | Zweck |
|---|---|---|
| `.find()` | **Element** (oder `undefined`) | Erstes Element finden, das Bedingung erfüllt |
| `.some()` | **Boolean** | Gibt es **mindestens ein** Element, das passt? |
| `.every()` | **Boolean** | Erfüllen **alle** Elemente die Bedingung? |
| `.filter()` | **Array** (alle Treffer) | Alle Elemente, die Bedingung erfüllen |
| `.map()` | **Array** (gleiche Länge) | Jedes Element transformieren |
| `.forEach()` | `undefined` | Über jedes Element iterieren (Seiteneffekte) |
| `.reduce()` | **Beliebig** | Array zu einem einzigen Wert zusammenfassen |
| `.includes()` | **Boolean** | Enthält Array einen bestimmten Wert? |
| `.findIndex()` | **Number** (Index oder `-1`) | Index des ersten Treffers |
| `.indexOf()` | **Number** | Index eines bestimmten Werts |
| `.sort()` | **Array** (mutiert!) | Sortiert das Array |
| `.flat()` | **Array** | Verschachtelte Arrays "abflachen" |
| `.flatMap()` | **Array** | `.map()` + `.flat()` kombiniert |

---

## Beispiele mit deinen `members`:

```js
const members = [
  { id: "1", name: "Bruno API Tests", type: "GROUP" },
  { id: "2", name: "Client X", type: "CLIENT" }
];
```

### `.find()` – ein Objekt zurück
```js
members.find(m => m.name === "Bruno API Tests");
// → { id: "1", name: "Bruno API Tests", type: "GROUP" }
```

### `.some()` – nur ja/nein
```js
members.some(m => m.type === "GROUP");
// → true
```

### `.every()` – alle?
```js
members.every(m => m.id !== "");
// → true (alle haben eine ID)
```

### `.filter()` – alle Treffer
```js
members.filter(m => m.type === "CLIENT");
// → [{ id: "2", name: "Client X", type: "CLIENT" }]
```

### `.map()` – transformieren
```js
members.map(m => m.name);
// → ["Bruno API Tests", "Client X"]
```

### `.reduce()` – aggregieren
```js
members.reduce((acc, m) => acc + ", " + m.name, "");
// → ", Bruno API Tests, Client X"
```

### `.includes()` – nur bei primitiven Werten
```js
["GROUP", "CLIENT"].includes("USER");
// → false
```

---

## Faustregel für deine Bruno-Tests:

| Frage | Methode |
|---|---|
| "Gibt es überhaupt einen Member mit Name X?" | `.some()` |
| "Hol mir den Member mit Name X" | `.find()` |
| "Gib mir alle Member vom Typ CLIENT" | `.filter()` |
| "Mach mir eine Liste aller Namen" | `.map()` |
| "Sind alle Member vom Typ GROUP?" | `.every()` |