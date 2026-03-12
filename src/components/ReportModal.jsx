import { useTranslation } from 'react-i18next';
import './ReportModal.css';

function ReportModal({ isOpen, onClose }) {
  const { t } = useTranslation();

  // Obtener todos los reportes de todas las categorías
  const allReports = [
    // Emergencia
    {
      id: 'security',
      name: t('settings.reports.security'),
      icon: '🚨',
      category: 'emergency'
    },
    {
      id: 'ambulance',
      name: t('settings.reports.ambulance'),
      icon: '🚑',
      category: 'emergency'
    },
    // Seguridad
    {
      id: 'personTheft',
      name: t('settings.reports.personTheft'),
      icon: '👤',
      category: 'safety'
    },
    {
      id: 'vehicleTheft',
      name: t('settings.reports.vehicleTheft'),
      icon: '🚗',
      category: 'safety'
    },
    {
      id: 'houseTheft',
      name: t('settings.reports.houseTheft'),
      icon: '🏠',
      category: 'safety'
    },
    {
      id: 'accident',
      name: t('settings.reports.accident'),
      icon: '⚠️',
      category: 'safety'
    },
    {
      id: 'drugs',
      name: t('settings.reports.drugs'),
      icon: '💊',
      category: 'safety'
    },
    {
      id: 'disturbance',
      name: t('settings.reports.disturbance'),
      icon: '🔊',
      category: 'safety'
    },
    {
      id: 'cableTheft',
      name: t('settings.reports.cableTheft'),
      icon: '🔌',
      category: 'safety'
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="report-modal-overlay" onClick={onClose}></div>
      <div className="report-modal">
        <div className="report-modal-header">
          <h2 className="report-modal-title">{t('home.report')}</h2>
          <button className="report-modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="report-modal-content">
          <div className="reports-grid">
            {allReports.map((report) => (
              <div key={report.id} className="report-grid-item">
                <div className="report-icon-circle">
                  <span className="report-icon-emoji">{report.icon}</span>
                </div>
                <span className="report-grid-name">{report.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportModal;
