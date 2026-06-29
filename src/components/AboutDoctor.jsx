import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './AboutDoctor.css';

const AboutDoctor = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-card">
          <div className="about-image-wrapper" data-aos="fade-left">
            <img src="/assets/clinic_room.png" alt="عيادة الأسنان" className="about-image" />
          </div>
          
          <div className="about-content" data-aos="fade-right">
            <span className="about-subtitle">عن الدكتور</span>
            <h2 className="about-title">د. أحمد حسن</h2>
            <h3 className="about-profession">استشاري طب الأسنان</h3>
            
            <p className="about-description">
              خبرة أكثر من 10 سنوات في مجال طب الأسنان. نحرص على تقديم أفضل رعاية صحية لمرضانا باستخدام أحدث التقنيات العالمية.
            </p>
            
            <ul className="about-features">
              <li>
                <CheckCircle2 size={20} className="text-primary" />
                <span>ماجستير في طب الأسنان - جامعة القاهرة</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="text-primary" />
                <span>عضو الجمعية المصرية لطب الأسنان</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="text-primary" />
                <span>دورات متقدمة في زراعة وتقويم الأسنان</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
