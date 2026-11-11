# Backup Motortime – 11 novembre 2026

Questo è un punto di ripristino completo del sito Motortime, fatto dopo il controllo generale dell'11/11/2026.

## Cosa contiene
- Tutta l'app (`index.html`, `sw.js`, `manifest.webmanifest`, icone) com'era il 11/11/2026.
- Tutti i dati dei 10 campionati in `data/` (F1, F2, F3, MotoGP, Moto2, Moto3, WorldSBK, WorldSSP, World Sportbike, WEC), già compilati e controllati.
- `backup/istruzioni-aggiornamento-automatico.txt`: il testo completo dell'attività pianificata che aggiorna i dati 7 volte al giorno (alle 0:47, 8:47, 11:47, 14:47, 19:47, 21:47, 23:47 ora italiana). Serve per ricrearla se venisse cancellata.

## Come ripristinare
- Il backup è salvato nel tag `backup-2026-11-11` e nel branch `backup-2026-11-11` del repository.
- Per tornare a questa versione basta chiedere a Claude: "ripristina il backup Motortime dell'11 novembre". Claude riporterà `main` a questo stato (solo i file dell'app, oppure anche i dati, a scelta).
- Se l'aggiornamento automatico sparisce: chiedere a Claude di ricrearlo con il testo di `istruzioni-aggiornamento-automatico.txt`, con orario `CRON_TZ=Europe/Rome 47 0,8,11,14,19,21,23 * * *`.
