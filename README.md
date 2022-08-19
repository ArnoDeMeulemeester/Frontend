# webservices-karine-2122-ArnoDeMeulemeester

Deze repository bevat alle code om mijn Front-end te laten draaien. Deze spreekt mijn API aan die op zijn beurt een databank aanspreekt die de eerste 45 liedjes van de Gentse studentencodex bevat.

Gebruikte software:
* bcrypt
  * hashen (+salt) van wachtwoorden
* cypress
  * testen van applicatie
* axios
  * aanspreken van API

Na het clonen van de repository open je een terminal en voer je volgend commando uit.

```
yarn install
yarn start
```
Het eerste commando zorgt ervoor dat alle nodige software gedownload wordt. Yarn start start de API op.

```
yarn run cypress open
```
Met dit commando voer je de cypress testen uit. Als deze goed zijn, dan weet je dat je website goed geladen wordt.
