import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'كشف وتشخيص',
    description: 'فحص شامل بأحدث الأجهزة',
    image: '/assets/service_diagnosis_1782692937223.png'
  },
  {
    id: 2,
    title: 'تقويم الأسنان',
    description: 'تقويم للأسنان لجميع الأعمار',
    image: '/assets/service_orthodontics_new_1782693080575.png'
  },
  {
    id: 3,
    title: 'علاج العصب',
    description: 'علاج وحفظ الأسنان بدون ألم',
    image: '/assets/service_root_canal_1782692954810.png'
  },
  {
    id: 4,
    title: 'تبييض الأسنان',
    description: 'تبييض آمن وفعال لابتسامة أكثر إشراقا',
    image: '/assets/service_whitening_1782692961840.png'
  },
  {
    id: 5,
    title: 'تركيبات الأسنان',
    description: 'تركيبات ثابتة ومتحركة بأعلى جودة',
    image: '/assets/service_implants_1782692970642.png'
  },
  {
    id: 6,
    title: 'حشوات تجميلية',
    description: 'حشوات تجميلية تطابق لون الأسنان',
    image: '/assets/service_fillings_1782692979958.png'
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-down">خدماتنا</h2>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={service.id} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
