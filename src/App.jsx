import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ReportSettingsProvider } from './context/ReportSettingsContext';
import LoginRegister from './components/LoginRegister';
import Onboarding from './components/Onboarding';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Notifications from './pages/Notifications';
import News from './pages/News';
import './App.css';

function App() {
  return (
    <ReportSettingsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ReportSettingsProvider>
  );
}

export default App;
