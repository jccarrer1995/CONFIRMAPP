import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Onboarding.css';

function Onboarding() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      title: t('onboarding.slide1.title'),
      description: t('onboarding.slide1.description')
    },
    {
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
      title: t('onboarding.slide2.title'),
      description: t('onboarding.slide2.description')
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      title: t('onboarding.slide3.title'),
      description: t('onboarding.slide3.description')
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Último slide: redirigir a Home
      navigate('/home');
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        {/* Imagen del slide */}
        <div className="slide-image-container">
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].title}
            className="slide-image"
          />
        </div>

        {/* Contenido del slide */}
        <div className="slide-content">
          <h2 className="slide-title">{slides[currentSlide].title}</h2>
          <p className="slide-description">{slides[currentSlide].description}</p>
        </div>

        {/* Indicadores de slides */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Botones de navegación */}
        <div className="slide-navigation">
          {currentSlide > 0 && (
            <button className="nav-button previous" onClick={handlePrevious}>
              {t('onboarding.previous')}
            </button>
          )}
          <button className="nav-button next" onClick={handleNext}>
            {currentSlide < slides.length - 1 
              ? t('onboarding.next') 
              : t('onboarding.finish')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
