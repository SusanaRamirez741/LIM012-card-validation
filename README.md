# Validación del número de una tarjeta de crédito para un e-commerce

##### `README.md`

## Índice

* [1. Presentación del proyecto](#1-presentación-del-proyecto)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Investigación UX](#4-investigación-UX)
* [5. Interfaz de usuario UI](#5-interfaz-de-usuario-UI)

***

## 1. Presentación del proyecto

  * CARD VALIDATION FOR E-COMMERCE


## 2. Resumen del proyecto

    Se desarrolló una aplicación para una página web de un e-commerce,en este caso del rubro de repostería;
    por medio de la cual se puede verificar el medio de pago de los pedidos online y de esta manera registrar una venta exitosa para el negocio.

  ![Imagen final del proyecto:](https://github.com/SusanaRamirez741/LIM012-card-validation/blob/master/src/images/proyecto-final.JPG)


## 3. Objetivos de aprendizaje

  ### UX

  * [x] [Diseñar la aplicación pensando y entendiendo al usuario](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/intro-ux/01-el-proceso-de-diseno/00-el-proceso-de-diseno)
  * [x] [Crear prototipos para obtener feedback e iterar](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/product-design/00-sketching/00-sketching)
  * [ ] [Aplicar los principios de diseño visual](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/product-design/01-visual-design/01-visual-design-basics)

  ### HTML y CSS

  * [x] [Uso correcto de HTML semántico](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
  * [x] [Uso de selectores de CSS](https://developer.mozilla.org/es/docs/Web/CSS/Selectores_CSS)
  * [x] [Construir tu aplicación respetando el diseño realizado](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/css/01-css/02-boxmodel-and-display) (maquetación).

  ### DOM

  * [x] [Uso de selectores de nodos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/browser/02-dom/03-1-dom-methods-selection)
  * [x] [Manejo de eventos del DOM](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/browser/02-dom/04-events)
  * [x] [Manipulación dinámica del DOM](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)

  ### Javascript

  * [ ] [Manipulación de strings](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/06-strings/01-strings)
  * [x] [Uso de condicionales](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/02-flow-control/01-conditionals-and-loops)
  * [x] [Uso de bucles](https://lms.laboratoria.la/cohorts/lim-2020-01-bc-core-lim012/courses/javascript/02-flow-control/02-loops)
  * [x] [Uso de funciones](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/javascript/02-flow-control/03-functions)
  * [ ] [Datos atómicos y estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
  * [ ] Utilizar ES Modules (`import` | `export`).

  ### Testing

  * [ ] [Testeo de tus funciones](https://jestjs.io/docs/es-ES/getting-started)

  ### Git y GitHub

  * [x] [Comandos de git](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/scm/01-git/04-commands)
    (`add` | `commit` | `pull` | `status` | `push`).
  * [x] [Manejo de repositorios de GitHub](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/scm/02-github/01-github)  (`clone` | `fork` | `gh-pages`).

  ### Buenas prácticas de desarrollo

  * [x] Organizar y dividir el código en módulos (Modularización).
  * [x] Uso de identificadores descriptivos (Nomenclatura | Semántica).
  * [ ] Uso de linter para seguir buenas prácticas (ESLINT).


## 4. Investigación UX

  1. Usuarios del producto:

    Los usuarios de esta aplicación serían los dueños de este e-commerce,quienes lo colocan en la pagina web de su negocio con el fin de mejorar su proceso de venta online.

     Objetivos:
    -Ser una herramienta de uso práctico para la validacion del medio de pago previo al proceso de compra/venta online.
    -Ofrecer una solución a los fraudes cibernéticos por trajetas de crédito fantasmas.

  2. Problemas/necesidades de los usuarios:

    Un problema principal que tienen los dueños de un e-commerce son los fraudes en las compras, muchas veces ingresan tarjetas clonadas que pueden realizar una compra sin necesidad de tener fondos reales; para estos problemas se creó esta aplicaion.

    Esta aplicación pide el ingreso del número de tarjeta de crédito/débito con el que se efectuará la compra en la página del comercio, este será evaluado para ver si es valido y continuar con la compra o invalido y rechazar la transacción;
    de esta manera evita los posibles fraudes por uso de tarjetas clonadas.

  3. Primeros prototipos en papel:
  ![Prototipo en papel](https://github.com/SusanaRamirez741/LIM012-card-validation/blob/master/src/images/prototipo-hoja.jpg)
  ![Diagrama de flujo](https://github.com/SusanaRamirez741/LIM012-card-validation/blob/master/src/images/flujograma.jpg)

  4. Feedback recibido:

    -Se recibieron sugerencias para que la funcionalidad de la aplicacion sea lo más simple posible
    -Las pantallas a mostrar sean las mínimas necesarias para lograr que sea de un uso muy práctico

	   Mejoras:

	  -Luego se planteo reducir el número de pantallas a mostrar y mejorar el diseño de la página para una mejor visualización y protagonismo de la funcionalidad de la aplicación.

  5. Prototipo final realizado en el progrma Figma:
  ![Prototipo final](https://github.com/SusanaRamirez741/LIM012-card-validation/blob/master/src/images/prototipo-figma.jpg)


## 5. Interfaz de usuario UI

  1. Se puede elegir el tipo de tarjeta a usar, visa o mastercard

  2. Esta aplicación te permite ingresar un número de tarjeta de como máximo 16 dígitos, validando el no ingreso de letras y/o carácteres.

  3. No permite el ingreso de un campo vacío

  4. Se puede visualizar el resultado si es válido o inválido

  5. Junto con el resultado de la validación se presenta el número de tarjeta oculto excepto los 4 últimos dígitos.

  6. Se puede recargar la página para volver a ingresar un nuevo npumero de tarjeta
