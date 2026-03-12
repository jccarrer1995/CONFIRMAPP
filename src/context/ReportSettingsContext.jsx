import { createContext, useContext, useState } from 'react';

const ReportSettingsContext = createContext();

export const useReportSettings = () => {
  const context = useContext(ReportSettingsContext);
  if (!context) {
    return {
      reportSettings: {},
      updateReportSetting: () => {}
    };
  }
  return context;
};

export const ReportSettingsProvider = ({ children }) => {
  // Estado inicial con todos los reportes
  const [reportSettings, setReportSettings] = useState({
    security: { showOnMap: true, receiveNotifications: true },
    ambulance: { showOnMap: true, receiveNotifications: true },
    personTheft: { showOnMap: true, receiveNotifications: true },
    vehicleTheft: { showOnMap: true, receiveNotifications: true },
    houseTheft: { showOnMap: true, receiveNotifications: true },
    accident: { showOnMap: true, receiveNotifications: true },
    drugs: { showOnMap: true, receiveNotifications: true },
    disturbance: { showOnMap: true, receiveNotifications: true },
    cableTheft: { showOnMap: true, receiveNotifications: true }
  });

  const updateReportSetting = (reportId, setting, value) => {
    setReportSettings(prev => ({
      ...prev,
      [reportId]: {
        ...prev[reportId],
        [setting]: value
      }
    }));
  };

  return (
    <ReportSettingsContext.Provider value={{ reportSettings, updateReportSetting }}>
      {children}
    </ReportSettingsContext.Provider>
  );
};
