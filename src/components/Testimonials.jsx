import React from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'مريم أ.',
    title: 'مريضة',
    text: 'تجربة أكثر من رائعة.. دكتور أحمد شخص محترم واهتمام بالتفصيل',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5
  },
  {
    id: 2,
    name: 'محمد ك.',
    title: 'مريض',
    text: 'العيادة نظيفة جدا والمواعيد دقيقة والتعامل راقي جدا.',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 5
  },
  {
    id: 3,
    name: 'سارة م.',
    title: 'مريضة',
    text: 'علاج بدون ألم ونتائج ممتازة. أنصح الجميع.',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title text-center" data-aos="fade-down">قالوا عنا</h2>
        
        <div className="testimonials-wrapper">
          <button className="slider-arrow prev" aria-label="Previous">
            <ChevronRight size={24} />
          </button>
          
          <div className="testimonials-grid">
            {testimonialsData.map((item, index) => (
              <div key={item.id} className="testimonial-card" data-aos="fade-up" data-aos-delay={index * 150}>
                <div className="stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#eab308" color="#eab308" />
                  ))}
                </div>
                <p className="testimonial-text">"{item.text}"</p>
                
                <div className="testimonial-author">
                  <img src={item.avatar} alt={item.name} className="author-avatar" />
                  <div className="author-info">
                    <h4>{item.name}</h4>
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="slider-arrow next" aria-label="Next">
            <ChevronLeft size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
