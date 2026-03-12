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
   # Google Maps (recomendado para el mapa en Home)
   VITE_GOOGLE_MAPS_API_KEY=tu_clave_aqui

   # Mapbox (opcional, si no usas Google Maps)
   VITE_MAPBOX_TOKEN=tu_token_aqui
   ```

   - **Google Maps:** [Google Cloud Console](https://console.cloud.google.com/) → APIs y servicios → Credenciales → Clave de API. Habilita "Maps JavaScript API".
   - **Mapbox:** [Mapbox](https://www.mapbox.com/) → cuenta → Access tokens.
   - **No subas el archivo `.env` a Git** (ya está en `.gitignore`).

---

## Despliegue en GitHub Pages

El proyecto incluye un workflow para publicar la app en **HTTPS** con GitHub Pages.

### 1. Añadir el secreto de la API Key

1. En GitHub: abre el repo **CONFIRMAPP** → **Settings** → **Secrets and variables** → **Actions**.
2. Pulsa **New repository secret**.
3. Nombre: `VITE_GOOGLE_MAPS_API_KEY`.
4. Valor: pega tu clave de Google Maps (la misma que usas en `.env`).
5. Guarda.

(Si usas Mapbox en producción, puedes crear también el secreto `VITE_MAPBOX_TOKEN`.)

### 2. Activar GitHub Pages desde Actions

1. En el repo → **Settings** → **Pages**.
2. En **Build and deployment**, **Source** elige **GitHub Actions**.

### 3. Desplegar

1. Sube los cambios (incluido el workflow y `vite.config.js` con `base: '/CONFIRMAPP/'`).
2. Haz push a la rama `main`.
3. Ve a **Actions** en el repo; se ejecutará el workflow "Deploy to GitHub Pages".
4. Cuando termine, la app estará en: **https://jccarrer1995.github.io/CONFIRMAPP/**

### 4. Google Maps en producción

En [Google Cloud Console](https://console.cloud.google.com/) → tu API Key → **Referentes HTTP**, añade:

- `https://jccarrer1995.github.io/CONFIRMAPP/*`

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
4. (Opcional) Crear **`.env`** desde `.env.example` y añadir `VITE_GOOGLE_MAPS_API_KEY` (y/o `VITE_MAPBOX_TOKEN`) para el mapa en Home.
5. Ejecutar **`npm run dev`** y abrir la URL en el navegador.

Con eso el proyecto debería funcionar. Si falta la clave de Google Maps, el mapa mostrará un mensaje pidiendo configurarla.
