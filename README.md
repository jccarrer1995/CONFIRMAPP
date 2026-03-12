# CONFIRMAPP

App para indicar eventos y sucesos.

Desarrollada con **React** + **Vite**.

---

## Requisitos previos

Antes de instalar el proyecto necesitas tener instalado:

| Herramienta | Versión recomendada | Comprobación |
|-------------|----------------------|---------------|
| **Node.js** | 18.x o superior (LTS) | `node -v` |
| **npm**     | 9.x o superior        | `npm -v`     |

- Descarga Node.js (incluye npm): [https://nodejs.org](https://nodejs.org)

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/jccarrer1995/CONFIRMAPP.git
cd CONFIRMAPP
```

### 2. Instalar dependencias

```bash
npm install
```

Esto instala todas las dependencias definidas en `package.json` (React, Vite, react-router-dom, i18next, etc.).

### 3. Configurar variables de entorno (opcional)

El mapa en la pantalla Home puede usar un token de Mapbox. Si no lo configuras, se mostrará una imagen de respaldo.

1. Copia el archivo de ejemplo y edítalo con tus claves:

   ```bash
   cp .env.example .env
   ```

2. Abre `.env` y rellena (opcional):

   ```env
   # Token de Mapbox para el mapa estático en Home (opcional)
   VITE_MAPBOX_TOKEN=tu_token_aqui
   ```

   - Cómo obtener el token: [Mapbox](https://www.mapbox.com/) → cuenta → Access tokens.
   - **No subas el archivo `.env` a Git** (ya está en `.gitignore`).

---

## Cómo ejecutar el proyecto

### Modo desarrollo

```bash
npm run dev
```

- Abre el navegador en la URL que indique Vite (por ejemplo `http://localhost:5173`).
- Los cambios en el código se recargan automáticamente.

### Build para producción

```bash
npm run build
```

- Genera la carpeta `dist/` con los archivos listos para desplegar.

### Vista previa del build

```bash
npm run preview
```

- Sirve la carpeta `dist/` localmente para probar el build antes de subir a un servidor.

### Linter

```bash
npm run lint
```

- Ejecuta ESLint sobre el código del proyecto.

---

## Resumen de pasos para que funcione

1. Tener **Node.js** (y npm) instalado.
2. **Clonar** el repo y entrar en la carpeta `CONFIRMAPP`.
3. Ejecutar **`npm install`**.
4. (Opcional) Crear **`.env`** desde `.env.example` y añadir `VITE_MAPBOX_TOKEN` si quieres el mapa de Mapbox en Home.
5. Ejecutar **`npm run dev`** y abrir la URL en el navegador.

Con eso el proyecto debería funcionar. Si falta el token de Mapbox, la app funciona igual; solo se verá una imagen alternativa en el mapa de Home.
