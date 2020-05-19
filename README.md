```
  __  __            _       _
 |  \/  | __ _ _ __| | ____| | _____      ___ __
 | |\/| |/ _` | '__| |/ / _` |/ _ \ \ /\ / / '_ \
 | |  | | (_| | |  |   < (_| | (_) \ V  V /| | | |
 |_|  |_|\__,_|_|  |_|\_\__,_|\___/ \_/\_/ |_| |_|📦📦📦

 ```
 La librería 'Marckdownd-Links'sirve para detectar los links que contiene un archivo con extensión .md, y hace cálculos estadísticos con respecto al total, unique y los links broken.

## 📌**Diagramas de Flujo**

![DF-API](src/img/api.png)

![DF-CLI](src/img/cli.png)
📦
## 📌**Instalación**

📍 **Global**
```
npm install -g git://github.com/RLCHuncp/LIM012-fe-md-links
```
📍 **Local**
```
npm install git://github.com/RLCHuncp/LIM012-fe-md-links
```
## 📌**Para usarlo**

1. Importa como módulo
```
const { mdLinks } = require('mdlinks');

```
Por ejemplo:

```
const { mdLinks } = require("mdlinks");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

```
