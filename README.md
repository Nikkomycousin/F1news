# Motortime

Web app (PWA) con orari italiani, canali TV, notizie, risultati, classifiche e calendario del motorsport:

| Sezione | Campionati (file in `data/`) |
|---|---|
| Formula | Formula 1 (`f1`), Formula 2 (`f2`), Formula 3 (`f3`) |
| MotoGP | MotoGP (`motogp`), Moto2 (`moto2`), Moto3 (`moto3`) |
| Superbike | WorldSBK (`wsbk`), Supersport (`wssp`), World Sportbike (`wssp300`, ex Supersport 300) |
| WEC | WEC Hypercar (`wec`) |

La pagina iniziale **Weekend** mette insieme le sessioni dei prossimi 7 giorni di tutti i campionati e il prossimo appuntamento di ciascuno.

Si apre senza account: https://nikkomycousin.github.io/F1news/

## Struttura

- `index.html` – l'app (una sola pagina, nessuna dipendenza esterna a parte i font).
- `data/<campionato>.json` – i dati di ogni campionato. L'app li rilegge a ogni apertura. Un file senza dati (valori `null` o liste vuote) mostra "Dati in arrivo".
- `manifest.webmanifest`, `sw.js`, `icon-*.png` – installazione sulla schermata Home e funzionamento offline.

## Formato dei file in `data/`

Ogni file ha queste chiavi (tutte facoltative):

- `news`: lista di `{id, title, summary, tag, source, url, published (ISO UTC), top?}`
- `info`: `{updated, nextGp: {name, circuit, date (ISO UTC), dateOnly?, label, note?}}`
- `weekend`: `{gp, circuit, updated, freeChannel?, tv8note?, sessions: [{name, start, end?, live, key?, tv8?: {live, time}}]}`
  - `freeChannel`: nome del canale in chiaro (predefinito `"TV8"`); il campo `tv8` di ogni sessione indica la messa in onda su quel canale.
  - `key: true` per le sessioni principali (qualifiche, Superpole, sprint, gare): sono quelle mostrate nella pagina Weekend.
- `results`: `{gp, round, updated, summary, podium?, tabs: [{label, kind: "race"|"quali", rows: [...]}]}`
- `videos`: lista di `{id, gp, session, title, youtube (ID di 11 caratteri), channel, published (ISO UTC)}`
- `standings`: `{updated, after, drivers: [{pos, name, team, points, champion?}], constructors: [{pos, team, points, drivers, champion?}]}`
- `calendar`: `{season, updated, rounds: [{round, name, circuit, date, winner?, team?, wins?, sprintWinner?, status?}]}`
- solo in `f1.json`: `h2h` (compagni di squadra)

Gli orari sono sempre in UTC nei file; l'app li mostra in ora italiana.

I dati vengono aggiornati automaticamente da Claude.

Motortime è un sito indipendente, non affiliato a Formula 1, FIA, MotoGP, Dorna, WorldSBK o ai team citati.
