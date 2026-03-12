import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const defaultCenter = { lat: 26.71, lng: -80.05 };
const defaultZoom = 13;

function GoogleMapView() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const mapRef = useRef(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || '',
  });

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError('Tu navegador no soporta geolocalización.');
      return;
    }
    setLocationError(null);
    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(pos);
        setLocationLoading(false);
        // Centrar el mapa en la nueva posición (por si ya estaba renderizado)
        if (mapRef.current) {
          mapRef.current.panTo(pos);
          mapRef.current.setZoom(15);
        }
      },
      (err) => {
        setLocationLoading(false);
        setLocationError(
          err.code === 1
            ? 'Permiso denegado. Pulsa "Mi ubicación" y acepta cuando el navegador lo pida.'
            : 'No se pudo obtener la ubicación. Comprueba GPS/conexión.'
        );
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  }, []);

  // Intentar obtener ubicación al cargar el mapa (puede no pedir permiso sin gesto del usuario)
  useEffect(() => {
    if (!isLoaded) return;
    requestLocation();
  }, [isLoaded, requestLocation]);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    if (userLocation) {
      map.panTo(userLocation);
      map.setZoom(15);
    }
  }, [userLocation]);

  const mapContainerStyle = useMemo(() => ({
    width: '100%',
    height: '100%',
  }), []);

  const mapOptions = useMemo(() => ({
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
  }), []);

  const center = userLocation || defaultCenter;

  if (!apiKey) {
    return (
      <div className="map-fallback">
        <p>Configura VITE_GOOGLE_MAPS_API_KEY en tu archivo .env</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="map-fallback">
        <p>No se pudo cargar el mapa. Comprueba tu conexión y la API Key.</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="map-fallback map-loading">
        <p>Cargando mapa…</p>
      </div>
    );
  }

  return (
    <div className="google-map-view">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={userLocation ? 15 : defaultZoom}
        options={mapOptions}
        onLoad={onMapLoad}
      >
        {userLocation && (
          <MarkerF
            position={userLocation}
            title="Tu ubicación"
            zIndex={10}
          />
        )}
      </GoogleMap>

      {/* Botón para pedir ubicación (gesto del usuario = el navegador suele mostrar el permiso) */}
      <button
        type="button"
        className="map-my-location-btn"
        onClick={requestLocation}
        disabled={locationLoading}
        title="Centrar en mi ubicación"
        aria-label="Centrar en mi ubicación"
      >
        {locationLoading ? (
          <span className="map-my-location-loading">...</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        )}
      </button>

      {locationError && (
        <div className="map-location-error" role="alert">
          {locationError}
        </div>
      )}
    </div>
  );
}

export default GoogleMapView;
