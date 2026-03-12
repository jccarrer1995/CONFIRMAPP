import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './LoginRegister.css';
import LogoIcon from './LogoIcon';

function LoginRegister() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'login') {
      console.log('Login:', formData.email, formData.password);
      // Aquí iría la lógica de login
      // Después del login exitoso, redirigir a Home
      navigate('/home');
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert(t('errors.passwordsDoNotMatch'));
        return;
      }
      console.log('Register:', formData);
      // Aquí iría la lógica de registro
      // Después del registro exitoso, redirigir a Onboarding
      navigate('/onboarding');
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Aquí iría la lógica de login social
  };

  return (
    <div className="login-register-container">
      <div className="login-register-card">
        {/* Logo y Header */}
        <div className="app-header">
          <LogoIcon />
          <h1 className="app-title">{t('app.title')}</h1>
          <p className="app-tagline">{t('app.tagline')}</p>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            {t('auth.login')}
          </button>
          <button
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            {t('auth.register')}
          </button>
        </div>

        {/* Social Login Buttons */}
        <div className="social-login">
          <button
            className="social-button google"
            onClick={() => handleSocialLogin('google')}
          >
            <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {t('auth.continueWithGoogle')}
          </button>
          <button
            className="social-button facebook"
            onClick={() => handleSocialLogin('facebook')}
          >
            <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            {t('auth.continueWithFacebook')}
          </button>
        </div>

        {/* Separator */}
        <div className="separator">
          <span>{t('auth.orContinueWithEmail')}</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">{t('auth.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t('auth.emailPlaceholder')}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">{t('auth.password')}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {activeTab === 'register' && (
            <div className="form-group">
              <label htmlFor="confirmPassword">{t('auth.confirmPassword')}</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          {activeTab === 'login' && (
            <a href="#" className="forgot-password">{t('auth.forgotPassword')}</a>
          )}

          <button type="submit" className="submit-button">
            {activeTab === 'login' ? t('auth.signIn') : t('auth.registerButton')}
          </button>
        </form>

        {activeTab === 'register' && (
          <p className="footer-text">{t('auth.joinThousands')}</p>
        )}
      </div>
    </div>
  );
}

export default LoginRegister;
