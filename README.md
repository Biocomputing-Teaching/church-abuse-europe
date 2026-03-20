# Church Abuse Europe

Repositori Jekyll pensat per a GitHub Pages sobre abusos sexuals a menors en l'Església catòlica a Europa, amb enfoc institucional i jurídic.

## Estructura

- `_reports/`: informes, comissions i grans corpus documentals
- `_jurisprudence/`: precedents del TEDH rellevants
- `_tracks/`: seguiments i línies obertes amb confirmació pública recent
- `_data/`: navegació, portals per país i directori de fonts
- `assets/`: estils i JavaScript lleuger

## Publicació

El lloc està preparat per publicar-se com a projecte de GitHub Pages a:

`https://biocomputing-teaching.github.io/church-abuse-europe/`

Si canvia el nom del repositori, cal actualitzar `baseurl` a [_config.yml](/home/jordivilla/GitHub/TEACHING/law/_config.yml).

## Criteri editorial

- Fonts prioritàries: organismes públics, comissions independents, portals parlamentaris, HUDOC i portals institucionals d'Esglésies nacionals quan actuen com a repositoris documentals.
- Les xifres només es publiquen quan consten expressament a la font.
- Els procediments oberts es presenten com a seguiments, no com a condemnes.
- La data de l'última verificació és obligatòria en seguiments i línies obertes.
- No s'inclouen dades personals innecessàries ni llistes de persones sense traça institucional verificable.

## Desenvolupament local

Si l'entorn ja disposa de Jekyll:

```bash
jekyll serve
```

o bé:

```bash
bundle exec jekyll serve
```
