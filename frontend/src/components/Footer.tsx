import React from 'react';
import { Leaf, Heart, ArrowUp, Phone, Mail } from 'lucide-react';
import { CLINIC_INFO } from '../data/contentData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-light)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem',
        color: 'var(--text-muted)'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Leaf size={20} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-main)' }}>
                  {CLINIC_INFO.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                  BÜTÜNSEL BESLENME KLİNİĞİ
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {CLINIC_INFO.motto}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="#"
                aria-label="Instagram"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'background-color 0.2s ease'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
                aria-label="Telefon"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)'
                }}
              >
                <Phone size={18} />
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                aria-label="E-posta"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)'
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              Hızlı Bağlantılar
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><a href="#hakkimda" style={{ transition: 'color 0.2s' }}>Hakkımda & Yaklaşımım</a></li>
              <li><a href="#hizmetler" style={{ transition: 'color 0.2s' }}>Klinik Danışmanlık Paketleri</a></li>
              <li><a href="#akilli-araclar" style={{ transition: 'color 0.2s' }}>Akıllı Kalori & Makro Hesaplayıcı</a></li>
              <li><a href="#akilli-araclar" style={{ transition: 'color 0.2s' }}>Dijital Su Takip Asistanı</a></li>
              <li><a href="#moodnutri" style={{ transition: 'color 0.2s', color: 'var(--color-accent)', fontWeight: 600 }}>MoodNutri™ Modülü</a></li>
              <li><a href="#yorumlar" style={{ transition: 'color 0.2s' }}>Danışan Yorumları & Başarılar</a></li>
            </ul>
          </div>

          {/* Clinic Working Hours & Location */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              Klinik & Seans Saatleri
            </h4>
            <div style={{ fontSize: '0.875rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div>
                <strong>Adres:</strong><br />
                {CLINIC_INFO.address}
              </div>
              <div>
                <strong>Seans Saatleri:</strong><br />
                {CLINIC_INFO.workingHours}
              </div>
              <div style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                Online Danışmanlık: 7/24 Randevu Girişi
              </div>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              Önemli Bilgilendirme
            </h4>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
              Bu web sitesinde yer alan hesaplama araçları, diyet önerileri ve makaleler genel bilgilendirme amacıyla hazırlanmıştır. 
              Hiçbir içerik hekim teşhisi veya tedavisi yerine geçmez. Kronik hastalığı olan bireylerin program öncesinde hekim onayı alması gereklidir.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem'
          }}
        >
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.clinicName}. Tüm hakları saklıdır.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span>Bütünsel sağlık ve özşefkat ile tasarlandı</span>
            <Heart size={14} color="var(--color-accent)" />
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Yukarı Çık"
            style={{
              padding: '0.4rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-subtle)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.8rem'
            }}
          >
            <span>Yukarı</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
