import React from 'react';
import { ShieldCheck, CalendarClock, Clock, Calendar } from 'lucide-react';

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className={className} viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
  </svg>
);
import './Booking.css';

const Booking = () => {
  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking-container" data-aos="zoom-in" data-aos-duration="1000">
          <div className="booking-header">
            <h2 className="section-title">احجز موعدك بسهولة</h2>
            <p className="section-subtitle">اختر الوقت المناسب لك وسنكون في انتظارك</p>
          </div>
          
          <div className="booking-features">
            <div className="booking-feature-card" data-aos="fade-up" data-aos-delay="100">
              <ShieldCheck size={32} className="feature-icon" />
              <div>
                <h4>خصوصية تامة</h4>
                <p>بياناتك في أمان</p>
              </div>
            </div>
            
            <div className="booking-feature-card">
              <CalendarClock size={32} className="feature-icon" />
              <div>
                <h4>حجز سريع</h4>
                <p>في أقل من دقيقة</p>
              </div>
            </div>
            
            <div className="booking-feature-card">
              <Clock size={32} className="feature-icon" />
              <div>
                <h4>مواعيد مرنة</h4>
                <p>صباحية ومسائية</p>
              </div>
            </div>
            
            <div className="booking-feature-card">
              <WhatsAppIcon size={32} className="feature-icon whatsapp-icon" />
              <div>
                <h4>واتساب</h4>
                <p>تواصل معنا مباشرة</p>
              </div>
            </div>
          </div>
          
          <div className="booking-actions" data-aos="fade-up" data-aos-delay="500">
            <button className="btn btn-primary btn-large" onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}>
              <Calendar size={20} />
              احجز موعدك الآن
            </button>
            <button className="btn btn-outline btn-large">
              <WhatsAppIcon size={20} />
              تواصل عبر واتساب
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
