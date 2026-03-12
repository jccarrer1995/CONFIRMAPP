import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReportSettings } from '../context/ReportSettingsContext';
import './ReportDetail.css';

function ReportDetail({ report, isOpen, onClose }) {
  const { t } = useTranslation();
  const { reportSettings, updateReportSetting } = useReportSettings();
  const [isClosing, setIsClosing] = useState(false);
  
  const currentSettings = reportSettings[report?.id] || { showOnMap: false, receiveNotifications: false };
  const [showOnMap, setShowOnMap] = useState(currentSettings.showOnMap);
  const [receiveNotifications, setReceiveNotifications] = useState(currentSettings.receiveNotifications);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
    if (report) {
      const currentSettings = reportSettings[report.id] || { showOnMap: false, receiveNotifications: false };
      setShowOnMap(currentSettings.showOnMap);
      setReceiveNotifications(currentSettings.receiveNotifications);
    }
  }, [isOpen, report, reportSettings]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Duración de la animación
  };

  if (!isOpen || !report) return null;

  return (
    <>
      <div className="report-detail-overlay" onClick={handleClose}></div>
      <div className={`report-detail-drawer ${isClosing ? 'closing' : ''}`}>
        <div className="drawer-header">
          <button className="drawer-back" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h2 className="drawer-title">{report.name}</h2>
          <div className="header-spacer"></div>
        </div>

        <div className="drawer-content">
          <div className="settings-categories">
            <div className="category-section">
              <h3 className="category-title">{t('settings.categories.options')}</h3>
              <div className="category-items">
                <div className="report-item">
                  <div className="report-item-top">
                    <div className="report-item-text">
                      <span className="report-name">{t('settings.showOnMap')}</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={showOnMap}
                        onChange={(e) => {
                          const newValue = e.target.checked;
                          setShowOnMap(newValue);
                          if (report?.id) {
                            updateReportSetting(report.id, 'showOnMap', newValue);
                          }
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
                <div className="report-item">
                  <div className="report-item-top">
                    <div className="report-item-text">
                      <span className="report-name">{t('settings.receiveNotifications')}</span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={receiveNotifications}
                        onChange={(e) => {
                          const newValue = e.target.checked;
                          setReceiveNotifications(newValue);
                          if (report?.id) {
                            updateReportSetting(report.id, 'receiveNotifications', newValue);
                          }
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportDetail;
