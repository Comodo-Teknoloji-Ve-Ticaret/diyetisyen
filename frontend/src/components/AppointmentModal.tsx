import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Calendar, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Video, 
  MapPin, 
  MessageSquare
} from 'lucide-react';
import { SERVICES_DATA, CLINIC_INFO } from '../data/contentData';
import type { AppointmentData } from '../types';


interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceId
}) => {
  const [step, setStep] = useState<number>(1);

  const [appointment, setAppointment] = useState<AppointmentData>({
    serviceId: preSelectedServiceId || 'surdurulebilir-kilo',
    appointmentType: 'online',
    date: '2026-10-27',
    timeSlot: '11:00',
    fullName: '',
    email: '',
    phone: '',
    notes: '',
    healthGoals: 'Sağlıklı ve kalıcı kilo vermek, bedenimle barışmak istiyorum.'
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  // Calendar dates mock (next 6 days)
  const availableDates = [
    { day: 'Pzt', dateStr: '27 Ekim', value: '2026-10-27' },
    { day: 'Sal', dateStr: '28 Ekim', value: '2026-10-28' },
    { day: 'Çar', dateStr: '29 Ekim', value: '2026-10-29' },
    { day: 'Per', dateStr: '30 Ekim', value: '2026-10-30' },
    { day: 'Cum', dateStr: '31 Ekim', value: '2026-10-31' },
    { day: 'Cmt', dateStr: '01 Kas', value: '2026-11-01' },
  ];

  const availableSlots = [
    '09:30', '11:00', '14:00', '15:30', '17:00', '18:30'
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      // Validate inputs
      if (!appointment.fullName || !appointment.phone) {
        alert('Lütfen adınızı ve telefon numaranızı giriniz.');
        return;
      }
      const code = 'DNA-' + Math.floor(1000 + Math.random() * 9000);
      setBookingCode(code);
      setBookingConfirmed(true);
      setStep(4);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const selectedServiceObj = SERVICES_DATA.find(s => s.id === appointment.serviceId);

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '680px',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '28px',
          padding: '2.5rem',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Kapat"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)'
          }}
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', marginBottom: '0.5rem' }}>
            <Calendar size={14} />
            <span>Online Randevu & Ön Değerlendirme</span>
          </div>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--text-main)', margin: 0 }}>
            {bookingConfirmed ? 'Randevunuz Başarıyla Oluşturuldu!' : 'Bedeninle Barışma Yolculuğuna Başla'}
          </h2>
        </div>

        {/* Stepper indicator */}
        {!bookingConfirmed && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                style={{ 
                  flex: 1, 
                  height: '6px', 
                  borderRadius: '3px', 
                  backgroundColor: step >= s ? 'var(--color-primary)' : 'var(--bg-subtle)',
                  transition: 'background-color 0.3s ease'
                }} 
              />
            ))}
          </div>
        )}

        {/* STEP 1: SERVICE SELECTION */}
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
              1. Adım: Danışmanlık Programınızı Seçin
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              {SERVICES_DATA.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setAppointment({ ...appointment, serviceId: srv.id })}
                  style={{
                    padding: '1.15rem',
                    borderRadius: '16px',
                    border: appointment.serviceId === srv.id ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                    backgroundColor: appointment.serviceId === srv.id ? 'var(--color-primary-light)' : 'var(--bg-subtle)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem', color: appointment.serviceId === srv.id ? 'var(--color-primary)' : 'var(--text-main)' }}>
                      {srv.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      {srv.tagline}
                    </div>
                  </div>
                  {appointment.serviceId === srv.id && <CheckCircle size={22} color="var(--color-primary)" />}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: CONSULTATION TYPE, DATE & TIME */}
        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
              2. Adım: Seans Şekli, Tarih ve Saat Seçimi
            </h3>

            {/* Type selector: Online vs In-person */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <button
                type="button"
                onClick={() => setAppointment({ ...appointment, appointmentType: 'online' })}
                style={{
                  padding: '1rem',
                  borderRadius: '14px',
                  border: appointment.appointmentType === 'online' ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                  backgroundColor: appointment.appointmentType === 'online' ? 'var(--color-primary-light)' : 'var(--bg-subtle)',
                  color: appointment.appointmentType === 'online' ? 'var(--color-primary)' : 'var(--text-main)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <Video size={18} />
                <span>Online Görüntülü Seans</span>
              </button>

              <button
                type="button"
                onClick={() => setAppointment({ ...appointment, appointmentType: 'in_person' })}
                style={{
                  padding: '1rem',
                  borderRadius: '14px',
                  border: appointment.appointmentType === 'in_person' ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                  backgroundColor: appointment.appointmentType === 'in_person' ? 'var(--color-primary-light)' : 'var(--bg-subtle)',
                  color: appointment.appointmentType === 'in_person' ? 'var(--color-primary)' : 'var(--text-main)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <MapPin size={18} />
                <span>Suadiye Kliniği (Yüz Yüze)</span>
              </button>
            </div>

            {/* Date selection cards */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                Görüşme Tarihini Seçin
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                {availableDates.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setAppointment({ ...appointment, date: item.value })}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '12px',
                      border: appointment.date === item.value ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                      backgroundColor: appointment.date === item.value ? 'var(--color-primary-light)' : 'var(--bg-subtle)',
                      color: appointment.date === item.value ? 'var(--color-primary)' : 'var(--text-main)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.day}</div>
                    <div style={{ fontSize: '0.9rem' }}>{item.dateStr}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                Uygun Saat Dilimi (45 Dk)
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setAppointment({ ...appointment, timeSlot: slot })}
                    style={{
                      padding: '0.65rem',
                      borderRadius: '10px',
                      border: appointment.timeSlot === slot ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                      backgroundColor: appointment.timeSlot === slot ? 'var(--color-primary-light)' : 'var(--bg-subtle)',
                      color: appointment.timeSlot === slot ? 'var(--color-primary)' : 'var(--text-main)',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: CLIENT DETAILS */}
        {step === 3 && (
          <div>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
              3. Adım: İletişim & Sağlık Hedefiniz
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  <User size={14} /> Ad Soyad *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Sena Demirhan"
                  value={appointment.fullName}
                  onChange={(e) => setAppointment({ ...appointment, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    <Phone size={14} /> Telefon Numarası *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0532 000 00 00"
                    value={appointment.phone}
                    onChange={(e) => setAppointment({ ...appointment, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    <Mail size={14} /> E-posta Adresi
                  </label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    value={appointment.email}
                    onChange={(e) => setAppointment({ ...appointment, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  <FileText size={14} /> Öncelikli Hedefiniz / Diyetisyene Notunuz
                </label>
                <textarea
                  rows={3}
                  placeholder="Örn: İnsülin direncim var, sürekli tatlı krizine giriyorum..."
                  value={appointment.healthGoals}
                  onChange={(e) => setAppointment({ ...appointment, healthGoals: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    resize: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: CONFIRMATION VIEW */}
        {step === 4 && (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div 
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-light)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                color: 'var(--color-primary)'
              }}
            >
              <CheckCircle size={40} />
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
              Randevu Takip Kodu
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
              {bookingCode}
            </div>

            {/* Summary card */}
            <div 
              style={{
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: '18px',
                padding: '1.5rem',
                textAlign: 'left',
                border: '1px solid var(--border-light)',
                marginBottom: '1.75rem',
                fontSize: '0.9rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.65rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Danışan:</span>
                <strong>{appointment.fullName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.65rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Program:</span>
                <strong>{selectedServiceObj?.title || 'Bütünsel Beslenme Seansı'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.65rem', borderBottom: '1px solid var(--border-subtle)', marginBottom: '0.65rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Görüşme Şekli:</span>
                <strong>{appointment.appointmentType === 'online' ? 'Online Görüntülü' : 'Suadiye Kliniği'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Tarih & Saat:</span>
                <strong>{appointment.date} • {appointment.timeSlot}</strong>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Asistanımız randevunuzu teyit etmek ve ilk görüşme öncesi <strong>Beslenme Anamnez Formunuzu</strong> iletmek üzere 15 dakika içinde WhatsApp üzerinden sizinle iletişime geçecektir.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Merhaba%2C%20${bookingCode}%20kodlu%20randevumu%20onaylamak%20istiyorum.`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF', padding: '0.9rem' }}
              >
                <MessageSquare size={18} />
                <span>WhatsApp İle Hızlı Onay Al</span>
              </a>

              <button
                onClick={onClose}
                className="btn btn-ghost"
              >
                Pencereyi Kapat
              </button>
            </div>
          </div>
        )}

        {/* Footer Navigation Buttons */}
        {!bookingConfirmed && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="btn btn-ghost"
                style={{ padding: '0.65rem 1.25rem' }}
              >
                <ArrowLeft size={16} />
                <span>Geri</span>
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.75rem' }}
            >
              <span>{step === 3 ? 'Randevuyu Onayla' : 'Devam Et'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
