import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './Notifications.css';

function Notifications() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('notifications');

  // Datos de ejemplo de notificaciones
  const notifications = [
    {
      id: 1,
      type: 'emergency',
      title: 'Emergencia de Seguridad',
      message: 'Se reportó una emergencia de seguridad cerca de tu ubicación',
      time: 'Hace 5 minutos',
      read: false
    },
    {
      id: 2,
      type: 'safety',
      title: 'Robo a persona',
      message: 'Nuevo reporte de robo a persona en tu área',
      time: 'Hace 15 minutos',
      read: false
    },
    {
      id: 3,
      type: 'accident',
      title: 'Accidente',
      message: 'Se reportó un accidente en la zona',
      time: 'Hace 1 hora',
      read: true
    },
    {
      id: 4,
      type: 'safety',
      title: 'Robo de vehículo',
      message: 'Nuevo reporte de robo de vehículo cerca de ti',
      time: 'Hace 2 horas',
      read: true
    }
  ];

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h1 className="notifications-title">{t('home.nav.notifications')}</h1>
      </div>

      <div className="notifications-content">
        {notifications.length > 0 ? (
          <div className="notifications-list">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${notification.read ? 'read' : 'unread'}`}
              >
                <div className="notification-item-top">
                  <span className="notification-icon">
                    {notification.type === 'emergency' && '🚨'}
                    {notification.type === 'safety' && '👤'}
                    {notification.type === 'accident' && '⚠️'}
                  </span>
                  <div className="notification-content">
                    <div className="notification-header">
                      <h3 className="notification-title">{notification.title}</h3>
                    </div>
                    <p className="notification-message">{notification.message}</p>
                    <span className="notification-time">{notification.time}</span>
                  </div>
                  {!notification.read && (
                    <span className="notification-badge" style={{ backgroundColor: '#f97316' }}></span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-notifications">
            <p>{t('notifications.empty') || 'No tienes notificaciones'}</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button 
          className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('reports');
            navigate('/home');
          }}
        >
          <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="nav-label">{t('home.nav.reports')}</span>
        </button>

        <button 
          className={`nav-item ${activeTab === 'feed' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('feed');
            navigate('/news');
          }}
        >
          <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            <line x1="8" y1="7" x2="16" y2="7"></line>
            <line x1="8" y1="11" x2="16" y2="11"></line>
            <line x1="8" y1="15" x2="12" y2="15"></line>
          </svg>
          <span className="nav-label">{t('home.nav.feed')}</span>
        </button>

        <button 
          className={`nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('notifications');
            navigate('/notifications');
          }}
        >
          <div className="notification-wrapper">
            <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="notification-badge"></span>
          </div>
          <span className="nav-label">{t('home.nav.notifications')}</span>
        </button>

        <button 
          className={`nav-item ${activeTab === 'menu' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('menu');
            navigate('/menu');
          }}
        >
          <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span className="nav-label">{t('home.nav.menu')}</span>
        </button>
      </nav>
    </div>
  );
}

export default Notifications;
