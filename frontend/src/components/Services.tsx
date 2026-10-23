import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  Heart, 
  Flame, 
  Smile, 
  Stethoscope, 
  X
} from 'lucide-react';
import { SERVICES_DATA } from '../data/contentData';
import type { ServiceItem } from '../types';


interface ServicesProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'surdurulebilir-kilo':
        return <Heart size={24} color="var(--color-primary)" />;
      case 'fonksiyonel-tip':
        return <Stethoscope size={24} color="var(--color-teal)" />;
      case 'sporcu-performans':
        return <Flame size={24} color="var(--color-accent)" />;
      case 'moodnutri-vip':
        return <Smile size={24} color="#8338EC" />;
      default:
        return <Sparkles size={24} color="var(--color-primary)" />;
    }
  };

  return (
    <section id="hizmetler" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-tag">
            <Sparkles size={16} />
            <span>Kişiselleştirilmiş Klinik Programlar</span>
          </div>
          <h2 className="section-title">
            Tek Bir Kalıp Herkese Uymaz;{' '}
            <span style={{ color: 'var(--color-primary)' }}>Sizin Yaşamınıza Özel Çözümler</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Haftalık takip, 7/24 WhatsApp danışmanlığı, kan tahlili değerlendirmesi ve özel danışan paneli erişimi içeren kanıta dayalı programlarımız.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="glass-panel"
              style={{
                padding: '2.25rem',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: service.id === 'moodnutri-vip' 
                  ? '2px solid rgba(131, 56, 236, 0.4)' 
                  : (service.id === 'surdurulebilir-kilo' ? '2px solid rgba(45, 106, 79, 0.3)' : '1px solid var(--border-light)')
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div>
                {/* Top Badge & Duration */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: 'var(--bg-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getServiceIcon(service.id)}
                  </div>
                  {service.badge && (
                    <span 
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.35rem 0.8rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: service.id === 'moodnutri-vip' ? '#F3E8FF' : 'var(--color-primary-light)',
                        color: service.id === 'moodnutri-vip' ? '#8338EC' : 'var(--color-primary)',
                      }}
                    >
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.4 }}>
                  {service.tagline}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {service.description}
                </p>

                {/* Duration indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  <Clock size={16} color="var(--color-primary)" />
                  <span>{service.duration}</span>
                </div>

                {/* Feature Highlights */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
                    PROGRAM İÇERİĞİ:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <Check size={16} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <button
                  onClick={() => onSelectServiceForBooking(service.id)}
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '0.925rem' }}
                >
                  <span>Bu Program İçin Randevu Al</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setSelectedService(service)}
                  className="btn btn-ghost"
                  style={{ width: '100%', fontSize: '0.85rem' }}
                >
                  Tüm Detayları İncele
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(6px)',
            zIndex: 1100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '620px',
              backgroundColor: 'var(--bg-surface)',
              padding: '2.5rem',
              borderRadius: '24px',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              aria-label="Kapat"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)'
              }}
            >
              <X size={24} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {getServiceIcon(selectedService.id)}
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 700 }}>
                  {selectedService.badge || 'Klinik Protokol'}
                </span>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', margin: 0 }}>
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
              {selectedService.tagline}
            </p>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {selectedService.description}
            </p>

            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '16px', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.4rem' }}>
                KİMLER İÇİN EN İDEAL?
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', margin: 0 }}>
                {selectedService.idealFor}
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>
                PROGRAMA DAHİL OLAN HİZMETLER:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.65rem' }}>
                {selectedService.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <Check size={18} color="var(--color-primary)" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const id = selectedService.id;
                setSelectedService(null);
                onSelectServiceForBooking(id);
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}
            >
              <span>Bu Program İçin Ön Görüşme Planla</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
