import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReportSettings } from '../context/ReportSettingsContext';
import ReportDetailDrawer from './ReportDetailDrawer';
import './ReportSettingsDrawer.css';

function ReportSettingsDrawer({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { reportSettings } = useReportSettings();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);

  const getReportCategories = () => [
    {
      id: 'emergency',
      name: t('settings.categories.emergency'),
      icon: '🚨',
      reports: [
        {
          id: 'security',
          name: t('settings.reports.security'),
          icon: '🚨',
          showOnMap: reportSettings.security?.showOnMap ?? true,
          receiveNotifications: reportSettings.security?.receiveNotifications ?? true
        },
        {
          id: 'ambulance',
          name: t('settings.reports.ambulance'),
          icon: '🚑',
          showOnMap: reportSettings.ambulance?.showOnMap ?? true,
          receiveNotifications: reportSettings.ambulance?.receiveNotifications ?? true
        }
      ]
    },
    {
      id: 'safety',
      name: t('settings.categories.safety'),
      icon: '',
      reports: [
        {
          id: 'personTheft',
          name: t('settings.reports.personTheft'),
          icon: '👤',
          showOnMap: reportSettings.personTheft?.showOnMap ?? true,
          receiveNotifications: reportSettings.personTheft?.receiveNotifications ?? true
        },
        {
          id: 'vehicleTheft',
          name: t('settings.reports.vehicleTheft'),
          icon: '🚗',
          showOnMap: reportSettings.vehicleTheft?.showOnMap ?? true,
          receiveNotifications: reportSettings.vehicleTheft?.receiveNotifications ?? true
        },
        {
          id: 'houseTheft',
          name: t('settings.reports.houseTheft'),
          icon: '🏠',
          showOnMap: reportSettings.houseTheft?.showOnMap ?? true,
          receiveNotifications: reportSettings.houseTheft?.receiveNotifications ?? true
        },
        {
          id: 'accident',
          name: t('settings.reports.accident'),
          icon: '⚠️',
          showOnMap: reportSettings.accident?.showOnMap ?? true,
          receiveNotifications: reportSettings.accident?.receiveNotifications ?? true
        },
        {
          id: 'drugs',
          name: t('settings.reports.drugs'),
          icon: '💊',
          showOnMap: reportSettings.drugs?.showOnMap ?? true,
          receiveNotifications: reportSettings.drugs?.receiveNotifications ?? true
        },
        {
          id: 'disturbance',
          name: t('settings.reports.disturbance'),
          icon: '🔊',
          showOnMap: reportSettings.disturbance?.showOnMap ?? true,
          receiveNotifications: reportSettings.disturbance?.receiveNotifications ?? true
        },
        {
          id: 'cableTheft',
          name: t('settings.reports.cableTheft'),
          icon: '🔌',
          showOnMap: reportSettings.cableTheft?.showOnMap ?? true,
          receiveNotifications: reportSettings.cableTheft?.receiveNotifications ?? true
        }
      ]
    }
  ];

  const reportCategories = getReportCategories();

  const handleReportClick = (report) => {
    setSelectedReport(report);
  };

  const handleCloseDetail = () => {
    setSelectedReport(null);
  };

  // Resetear búsqueda cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
      setSelectedReport(null);
    }
  }, [isOpen]);

  // Función para filtrar reportes basándose en la búsqueda
  const filterReports = (reports) => {
    if (!searchQuery.trim()) {
      return reports;
    }
    const query = searchQuery.toLowerCase().trim();
    return reports.filter(report => 
      report.name.toLowerCase().includes(query)
    );
  };

  // Filtrar categorías y reportes
  const filteredCategories = reportCategories.map(category => ({
    ...category,
    reports: filterReports(category.reports)
  })).filter(category => category.reports.length > 0); // Solo mostrar categorías con reportes

  if (!isOpen) return null;

  return (
    <>
      <div className="report-settings-drawer-overlay" onClick={onClose}></div>
      <div className="report-settings-drawer-content">
        <div className="drawer-header">
          <button className="drawer-back" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h2 className="drawer-title">{t('settings.title')}</h2>
          <div className="header-spacer"></div>
        </div>

        <div className="drawer-content">
          {/* Search Bar */}
          <div className="settings-search">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              placeholder={t('settings.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="settings-search-input"
            />
          </div>

          {/* Categories */}
          <div className="settings-categories">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <div key={category.id} className="category-section">
                  <h3 className="category-title">{category.name}</h3>
                  <div className="category-items">
                    {category.reports.map((report) => (
                      <div
                        key={report.id}
                        className="report-item"
                        onClick={() => handleReportClick(report)}
                      >
                        <div className="report-item-top">
                          <span className="report-icon">{report.icon}</span>
                        <div className="report-item-text">
                          <span className="report-name">{report.name}</span>
                          {(report.showOnMap || report.receiveNotifications) && (
                            <span className="report-options">
                              {report.showOnMap ? t('settings.showOnMap') : ''}
                              {report.showOnMap && report.receiveNotifications ? ' | ' : ''}
                              {report.receiveNotifications ? t('settings.receiveNotifications') : ''}
                            </span>
                          )}
                        </div>
                          <svg
                            className="report-arrow"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M9 18l6-6-6-6"></path>
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>{t('settings.noResults') || 'No se encontraron reportes'}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Report Detail Drawer */}
      {selectedReport && (
        <ReportDetailDrawer
          report={selectedReport}
          isOpen={!!selectedReport}
          onClose={handleCloseDetail}
        />
      )}
    </>
  );
}

export default ReportSettingsDrawer;
