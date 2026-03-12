import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import SettingsDrawer from '../components/SettingsDrawer';
import './Menu.css';

function Menu() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('menu');
  const [showSettingsDrawer, setShowSettingsDrawer] = useState(false);

  const menuItems = [
    {
      id: 'profile',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      label: t('menu.profile'),
      onClick: () => {
        // Aquí iría la navegación a la página de perfil
        console.log('Ir a Mi Perfil');
      }
    },
    {
      id: 'settings',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      label: t('menu.settings'),
      onClick: () => {
        setShowSettingsDrawer(true);
      }
    }
  ];

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="menu-title">{t('menu.title')}</h1>
      </div>

      <div className="menu-content">
        <div className="menu-card">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="menu-item"
              onClick={item.onClick}
            >
              <div className="menu-item-icon">{item.icon}</div>
              <span className="menu-item-label">{item.label}</span>
              <svg 
                className="menu-item-arrow" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          ))}
        </div>
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

      {/* Settings Drawer */}
      <SettingsDrawer
        isOpen={showSettingsDrawer}
        onClose={() => setShowSettingsDrawer(false)}
      />
    </div>
  );
}

export default Menu;
