# PyCon Philippines 2015

## Develop

```bash
pipsi install sphinx
pipsi install watchdog
watchmedo shell-command --patterns="*.rst" --command="make html"
```

## Deploy

```bash
make deploy
```
