import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n/config'
import App from './App.jsx'

// Prevenir zoom con gestos en toda la aplicación
const preventZoom = (e) => {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
};

const preventDoubleTapZoom = (e) => {
  const now = new Date().getTime();
  const lastTouch = window.lastTouch || 0;
  const timeSinceLastTouch = now - lastTouch;
  
  if (timeSinceLastTouch < 300 && timeSinceLastTouch > 0) {
    e.preventDefault();
  }
  window.lastTouch = now;
};

// Agregar event listeners para prevenir zoom
document.addEventListener('touchstart', preventDoubleTapZoom, { passive: false });
document.addEventListener('touchmove', preventZoom, { passive: false });
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());
document.addEventListener('gestureend', (e) => e.preventDefault());

// Prevenir zoom con rueda del mouse
let lastWheelTime = 0;
document.addEventListener('wheel', (e) => {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
