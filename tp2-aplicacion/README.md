#  Aplicación de Fortaleza de Contraseña

Esta es una pequeña aplicación web que permite al usuario ingresar una contraseña y ver qué tan segura es. También incluye la funcionalidad de generar contraseñas aleatorias seguras.

##  Funcionalidades

- Entrada de texto para que el usuario escriba su contraseña.
- Botón para mostrar/ocultar la contraseña.
- Evaluación automática de la fortaleza de la contraseña:
  - **Poco segura**
  - **Segura**
  - **Muy segura**
- Generador de contraseñas aleatorias seguras.

## 🧠 ¿Cómo se calcula la fortaleza?

La seguridad de la contraseña se clasifica con base en los siguientes criterios:

- **Poco segura:** Menos de 6 caracteres, o no cumple con los criterios básicos.
- **Segura:** Mínimo 6 caracteres, contiene mayúsculas, minúsculas y números.
- **Muy segura:** Mínimo 10 caracteres, incluye mayúsculas, minúsculas, números y caracteres especiales (`@, $, !, %, *, ?, &`).
