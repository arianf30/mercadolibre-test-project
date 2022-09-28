<div align="center">

  ### <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/favicon.svg" height="30px"/>

  ***Test práctico para aspirantes de Mercado Libre***
</div>

<div align="center">
  
</div>

<!-- Contenido -->

<details>
  <summary>Tabla de contenido</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
    </li>
    <li><a href="#getting-started">Getting started</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#api">API</a></li>
    <li><a href="#toma-de-desiciones">Toma de desiciones</a></li>
    <li><a href="#conclusion">Conclusión</a></li>
  </ol>
</details>

## Sobre el proyecto

![app-meli-screenshot](https://i.ibb.co/kmmnhCR/app-meli.png)

Debía desarrollar una aplicación web cliente/servidor con buenas prácticas logrando usabilidad, SEO, performance, escalabilidad y accesibilidad.

El resultado es un **monorepo multipaquetes** creado con Node, cuyo paquete principal es la App de Meli solicitada con servidor en Express y cliente en React.

Los paquetes restantes están en la carpeta **/packages** y son: (ds.meli) un Design System de estilos CSS creado con SASS; (foundation) una librería de funciones extras para el DS; (ds.meli-react) y un paquete de Componentes de React.

<p align="right"><a href="#top">Back to top 🔼</a></p>

## Getting Started

Instalar las dependencias:

```sh
$ npm install
// or
$ yarn
```

Crear archivo .env en /app-meli:

```sh
PORT=8080
BASEURL=http://localhost:8080
```
Ejecutar un primer run build:

```sh
$ npm run build
// or
$ yarn build
```

Run in dev mode:

```sh
$ npm run dev
// or
$ yarn dev
```

### Built con

- JavaScript
- [esbuild](https://esbuild.github.io/)
- [rollup.js](https://rollupjs.org/guide/en/)

<p align="right"><a href="#top">Back to top 🔼</a></p>

## Stack

<div align="center">

![Alt](https://res.cloudinary.com/practicaldev/image/fetch/s--MEllstxd--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ky15k5z1y22ia9buh3ap.png "Repobeats analytics image")
![Alt](https://miro.medium.com/max/1400/1*XYEs0ooJcS68pDPIseKXUA.png)

</div>

**Monorepo con Lerna.**

**Herramientas de desarrollo:**
Tipado con Typescript, Eslint desde el root, git-commit-msg-linter para los commits, Husky para filtrar los commits y Jest para el testing.

**Workspaces:**
 - Design System: Atomic Design con SASS.

 - React-Components: React-TS-Rollup

 - APP-Meli: Clean Arquitecture Hexagonal, DDD, testing con Jest, SSR y CSR. Dynamic y Static rendering en react.


 ## API


Get Endpoints:

```sh
// Traer una lista de productos por búsdqueda

/api/items?query=:busqueda


// Traer un item específico por ID

/api/items/:itemId
```


<p align="right"><a href="#top">Back to top 🔼</a></p>

## Toma de desiciones 
**Usabilidad:** cuenta con navegación programática y además con dynamic rendering para que las búsquedas sean posibles y rápidas tanto en navegación interna como desde enlaces externos. Los componentes cumplen con estándares de diseño y usabilidad.

**Posicionamiento SEO:** 
Cuenta con las metaetiquetas dinámicas recomendadas usando Helmet (aunque no todas las necesarias) y contenido renderizado desde el servidor (SSR). Además de la posibilidad de filtrar si el usuario es un bot para enviarle siempre contenido estático.

**Escalabilidad:**
-	**Proyecto:** se puede escalar fácilmente ya que está estructurado para soportar varios DS y poder conectar con diferentes paquetes de componentes. También es posible sumar nuevas aplicaciones manteniendo un mismo entorno de desarrollo general.
- **Desing System:** estructurado como atomic desing altamente escalable. 
- **App-meli:** la arquitectura clean permite trabajar en diferentes dominios teniendo desacoplada la lógica del negocio y la infraestructura. Posibilita el mantenimiento y actualización de librerías/frameworks.

**Accesibilidad:** correcto uso de elementos HTML así como el orden y descripción de los elementos recorridos por voz ***(Probar con extensión Screen Reader)***. También como extra, decidí actualizar algunos colores y posiciones de elementos el diseño nuevo de MELI más accesible.

**Aclaración:** se contó con un tiempo de poco más de una semana por lo que en última etapa se saltaron algunas buenas prácticas como por ejemplo los commits por tareas, hacer releases, el uso casi exclusivo de variables en el DS, algún refactor, typos, diseño responsive, entre otros.

<p align="right"><a href="#top">Back to top 🔼</a></p>

## Conclusión:
Fue muy interesante pensar y ejecutar un proyecto que este a la altura de productos tan masivos y ejemplares como los de Mercado Libre. A pesar del poco tiempo creo demostrar la intención y la capacidad de conseguir la mayor eficiencia.

<p align="right"><a href="#top">Back to top 🔼</a></p>