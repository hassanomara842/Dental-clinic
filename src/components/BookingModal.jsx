import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import './BookingModal.css';

const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmitted(false);
    };
    window.addEventListener('open-booking-modal', handleOpen);
    return () => window.removeEventListener('open-booking-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} data-aos="zoom-in" data-aos-duration="300">
        <button className="modal-close" onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
        
        {submitted ? (
          <div className="modal-success text-center py-5">
            <CheckCircle size={64} className="text-primary mb-4" style={{ margin: '0 auto' }} />
            <h3 className="mb-2">تم استلام طلبك بنجاح!</h3>
            <p className="text-muted">سنتواصل معك هاتفياً في أقرب وقت لتأكيد الموعد.</p>
          </div>
        ) : (
          <>
            <h3 className="modal-title mb-4">احجز موعدك الآن</h3>
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label className="mb-2 d-block font-weight-bold">الاسم بالكامل</label>
                <input type="text" required placeholder="أدخل اسمك الثنائي" className="form-control w-100" />
              </div>
              <div className="form-group mb-3">
                <label className="mb-2 d-block font-weight-bold">رقم الهاتف</label>
                <input type="tel" required placeholder="رقم الموبايل" className="form-control w-100" />
              </div>
              <div className="form-group mb-3">
                <label className="mb-2 d-block font-weight-bold">الخدمة المطلوبة</label>
                <select required className="form-control w-100">
                  <option value="">اختر الخدمة...</option>
                  <option value="كشف">كشف وتشخيص</option>
                  <option value="تقويم">تقويم الأسنان</option>
                  <option value="عصب">علاج العصب</option>
                  <option value="تبييض">تبييض الأسنان</option>
                  <option value="تركيبات">تركيبات الأسنان</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div className="form-group mb-4">
                <label className="mb-2 d-block font-weight-bold">التاريخ المفضل</label>
                <input type="date" required className="form-control w-100" />
              </div>
              <button type="submit" className="btn btn-primary w-100" style={{ width: '100%', padding: '1rem' }}>
                تأكيد الحجز
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
