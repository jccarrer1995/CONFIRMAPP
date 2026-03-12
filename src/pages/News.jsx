import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './News.css';

function News() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('feed');
  const [likedPosts, setLikedPosts] = useState(new Set());

  // Datos de ejemplo de noticias
  const news = [
    {
      id: 1,
      profileIcon: '👤',
      reporterName: 'Juan Pérez',
      reportType: 'Emergencia de Seguridad',
      time: 'Hace 2 horas',
      location: 'Av. Principal 123, Ciudad',
      text: 'Se reportó una emergencia de seguridad en esta zona. Se recomienda evitar el área.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
      link: 'https://ejemplo.com/noticia1',
      likes: 12,
      comments: 5
    },
    {
      id: 2,
      profileIcon: '👤',
      reporterName: 'María García',
      reportType: 'Robo a persona',
      time: 'Hace 4 horas',
      location: 'Calle Secundaria 456, Ciudad',
      text: 'Se reportó un robo a persona en esta ubicación. Por favor tengan precaución al transitar por esta zona.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      link: 'https://ejemplo.com/noticia2',
      likes: 8,
      comments: 3
    },
    {
      id: 3,
      profileIcon: '👤',
      reporterName: 'Carlos López',
      reportType: 'Accidente',
      time: 'Hace 6 horas',
      location: 'Intersección Calle A y B, Ciudad',
      text: 'Accidente de tránsito reportado. Se recomienda usar rutas alternativas.',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
      link: 'https://ejemplo.com/noticia3',
      likes: 15,
      comments: 7
    }
  ];

  const handleLike = (postId) => {
    const newLikedPosts = new Set(likedPosts);
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId);
    } else {
      newLikedPosts.add(postId);
    }
    setLikedPosts(newLikedPosts);
  };

  return (
    <div className="news-container">
      <div className="news-header">
        <h1 className="news-title">{t('home.nav.feed')}</h1>
      </div>

      <div className="news-content">
        {news.length > 0 ? (
          <div className="news-list">
            {news.map((item) => (
              <div key={item.id} className="news-item">
                {/* Header */}
                <div className="news-item-header">
                  <div className="news-header-left">
                    <div className="news-profile-icon">{item.profileIcon}</div>
                  </div>
                  <div className="news-header-right">
                    <div className="news-header-top">
                      <span className="news-report-type">{item.reportType}</span>
                      <span className="news-time">{item.time}</span>
                    </div>
                    <div className="news-location">{item.location}</div>
                  </div>
                </div>

                {/* Body */}
                <div className="news-item-body">
                  <p className="news-text">{item.text}</p>
                  {item.image && (
                    <div className="news-image-container">
                      <img src={item.image} alt={item.reportType} className="news-image" />
                    </div>
                  )}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">
                      Ver más información
                    </a>
                  )}
                </div>

                {/* Footer */}
                <div className="news-item-footer">
                  <button 
                    className={`news-action-button ${likedPosts.has(item.id) ? 'liked' : ''}`}
                    onClick={() => handleLike(item.id)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={likedPosts.has(item.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span>{item.likes + (likedPosts.has(item.id) ? 1 : 0)}</span>
                  </button>
                  <button className="news-action-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>{item.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-news">
            <p>{t('news.empty') || 'No hay noticias disponibles'}</p>
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

export default News;
