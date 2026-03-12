import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ReportSettingsDrawer from './ReportSettingsDrawer';
import './SettingsDrawer.css';

function SettingsDrawer({ isOpen, onClose }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showReportSettings, setShowReportSettings] = useState(false);

  const handleLogout = () => {
    // Aquí podrías agregar lógica de limpieza de sesión si es necesario
    navigate('/');
  };

  const handleOptionClick = (option) => {
    switch (option) {
      case 'account':
        console.log('Ir a Cuenta');
        // Aquí iría la navegación a la página de cuenta
        break;
      case 'reportSettings':
        setShowReportSettings(true);
        break;
      case 'terms':
        console.log('Ir a Términos y condiciones');
        // Aquí iría la navegación a términos y condiciones
        break;
      case 'privacy':
        console.log('Ir a Política de privacidad');
        // Aquí iría la navegación a política de privacidad
        break;
      default:
        break;
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="settings-drawer-overlay" onClick={onClose}></div>
      <div className="settings-drawer">
        <div className="settings-drawer-header">
          <button className="settings-drawer-back" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h2 className="settings-drawer-title">{t('menu.settings')}</h2>
          <div className="settings-drawer-spacer"></div>
        </div>

        <div className="settings-drawer-content">
          <div className="settings-options">
            <button 
              className="settings-option"
              onClick={() => handleOptionClick('account')}
            >
              <div className="settings-option-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span className="settings-option-label">{t('settings.drawer.account')}</span>
              <svg className="settings-option-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>

            <button 
              className="settings-option"
              onClick={() => handleOptionClick('reportSettings')}
            >
              <div className="settings-option-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <span className="settings-option-label">{t('settings.drawer.reportSettings')}</span>
              <svg className="settings-option-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>

            <button 
              className="settings-option"
              onClick={() => handleOptionClick('terms')}
            >
              <div className="settings-option-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  <line x1="8" y1="7" x2="16" y2="7"></line>
                  <line x1="8" y1="11" x2="16" y2="11"></line>
                  <line x1="8" y1="15" x2="12" y2="15"></line>
                </svg>
              </div>
              <span className="settings-option-label">{t('settings.drawer.terms')}</span>
              <svg className="settings-option-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>

            <button 
              className="settings-option"
              onClick={() => handleOptionClick('privacy')}
            >
              <div className="settings-option-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <span className="settings-option-label">{t('settings.drawer.privacy')}</span>
              <svg className="settings-option-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="settings-drawer-footer">
          <button className="settings-logout-button" onClick={handleLogout}>
            {t('settings.drawer.logout')}
          </button>
          <p className="settings-copyright">Confirmapp todos los derechos reservados 2026</p>
        </div>
      </div>

      {/* Report Settings Overlay */}
      <ReportSettingsDrawer
        isOpen={showReportSettings}
        onClose={() => setShowReportSettings(false)}
      />
    </>
  );
}

export default SettingsDrawer;
