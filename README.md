# F1 News

App web personale (PWA) con notizie, orari, risultati, classifiche e calendario di **Formula 1**, **Formula 2** e **WEC Hypercar**.
Si apre senza account: https://nikkomycousin.github.io/F1news/

## Struttura

- `index.html` – l'app (una sola pagina, nessuna dipendenza esterna a parte i font).
- `data/f1.json`, `data/f2.json`, `data/wec.json` – i dati di ogni campionato. L'app li rilegge a ogni apertura.
- `manifest.webmanifest`, `sw.js`, `icon-*.png` – installazione sulla schermata Home e funzionamento offline.

## Formato dei file in `data/`

Ogni file ha queste chiavi:

- `news`: lista di `{id, title, summary, tag, source, url, published (ISO UTC), top?}`
- `info`: `{updated, nextGp: {name, circuit, date (ISO UTC), dateOnly?, label, note?}}`
- `weekend`: `{gp, circuit, updated, tv8note?, sessions: [{name, start, end?, live, key?, tv8?: {live, time}}]}`
- `results`: `{gp, round, updated, summary, podium?, tabs: [{label, kind: "race"|"quali", rows: [...]}]}`
- `videos`: lista di `{id, gp, session, title, youtube (ID di 11 caratteri), channel, published (ISO UTC)}` – highlights mostrati nella sezione Video
- `standings`: `{updated, after, drivers: [{pos, name, team, points, champion?}], constructors: [{pos, team, points, drivers, champion?}]}`
- `calendar`: `{season, updated, rounds: [{round, name, circuit, date, winner?, team?, wins?, sprintWinner?, status?}]}`
- solo in `f1.json`: `pages: {list: [{name, url, color}]}` (link alle pagine Facebook, da non toccare)

I dati vengono aggiornati automaticamente da Claude tre volte al giorno.
