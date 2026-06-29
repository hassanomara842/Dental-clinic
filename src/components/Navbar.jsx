import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const ToothIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 6c-1.5-2.5-4-3-6-1.5S4 8 4 11c0 2 1 4.5 2 6.5l1.5 3.5c.3.7 1.3.7 1.6 0L11 16c.4-.8 1.6-.8 2 0l1.9 5c.3.7 1.3.7 1.6 0l1.5-3.5c1-2 2-4.5 2-6.5 0-3-1.5-5-3.5-6.5s-4.5-1-6 1.5z"></path>
    <path d="M13.5 6c1 .5 2.5 1.5 2.5 3"></path>
  </svg>
);
import './Navbar.css';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`navbar-header ${hidden ? 'navbar-hidden' : ''}`}>
      <div className="container navbar-container">
        <div className="logo-section">
          <div className="logo-icon-wrapper">
            <ToothIcon className="logo-icon" size={24} />
          </div>
          <div className="logo-text">
            <h2>عيادة د. أحمد حسن</h2>
            <p>استشاري طب الأسنان</p>
          </div>
        </div>

        <nav className="nav-links">
          <ul>
            <li><a href="#hero" className="active">الرئيسية</a></li>
            <li><a href="#about">عن العيادة</a></li>
            <li><a href="#services">الخدمات</a></li>
            <li><a href="#pricing">الأسعار</a></li>
            <li><a href="#testimonials">آراء المرضى</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-primary btn-book" onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}>
            احجز موعدك
            <Calendar size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
