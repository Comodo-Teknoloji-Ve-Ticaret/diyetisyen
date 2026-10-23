import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Smile, 
  Activity,
  CheckCircle2
} from 'lucide-react';
import { CLINIC_INFO } from '../data/contentData';

interface HeroProps {
  onOpenAppointment: () => void;
  onScrollToTools: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onScrollToTools }) => {
  return (
    <section 
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient decorative blurs */}
      <div 
        style={{
          position: 'absolute',
          top: '5%',
          left: '10%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-primary-light) 0%, rgba(232, 245, 233, 0) 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
          pointerEvents: 'none'
        }} 
      />
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-accent-light) 0%, rgba(253, 240, 237, 0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
          pointerEvents: 'none'
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Hero Content */}
          <div>
            {/* Top UX Trust Badge */}
            <div 
              className="section-tag"
              style={{
                backgroundColor: 'var(--color-secondary-light)',
                color: 'var(--color-primary)',
                border: '1px solid var(--border-light)'
              }}
            >
              <Sparkles size={16} />
              <span>Kısıtlayıcı Diyetlere ve Suçluluk Duygusuna Son</span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                color: 'var(--text-main)',
                letterSpacing: '-0.03em'
              }}
            >
              Diyet listelerine mahkum olmadan,{' '}
              <span 
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                bedeninle barışık
              </span>{' '}
              sürdürülebilir bir iyilik hali.
            </h1>

            {/* Inspiring Subtitle */}
            <p 
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '560px'
              }}
            >
              Aç kalarak veya sevdiğin yemeklerden mahrum kalarak değil; hormonlarını dengeleyerek, 
              duygusal açlığını tanıyarak ve hücresel biyokimyanı anlayarak beslen. 
              Uzman klinik desteği ve sana özel akıllı araçlarla tanış.
            </p>

            {/* CTAs */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <button 
                onClick={onOpenAppointment}
                className="btn btn-primary"
                style={{ padding: '0.95rem 1.85rem', fontSize: '1.025rem' }}
              >
                <span>Ücretsiz Ön Değerlendirme Al</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={onScrollToTools}
                className="btn btn-secondary"
                style={{ padding: '0.95rem 1.6rem', fontSize: '1.025rem' }}
              >
                <Activity size={18} color="var(--color-primary)" />
                <span>Akıllı Araçları Dene</span>
              </button>
            </div>

            {/* Trust Points */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.875rem',
                color: 'var(--text-muted)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--color-primary)" />
                <span>Yasaklar Yok, Sürdürülebilirlik Var</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} color="var(--color-primary)" />
                <span>Kanıta Dayalı Klinik Protokol</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Heart size={16} color="var(--color-accent)" />
                <span>Özşefkat Odaklı Yaklaşım</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div style={{ position: 'relative' }}>
            {/* Visual Container */}
            <div 
              style={{
                position: 'relative',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-surface)'
              }}
            >
              <img 
                src="./dietitian.jpg" 
                alt="Dyt. Sena Alkan - Bütünsel Beslenme Uzmanı"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Gradient overlay at bottom */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '140px',
                  background: 'linear-gradient(to top, rgba(14, 24, 19, 0.85) 0%, rgba(14, 24, 19, 0) 100%)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  color: '#FFFFFF'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '1.15rem' }}>{CLINIC_INFO.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#E8F5E9', opacity: 0.9 }}>
                  Hacettepe Üniversitesi • Fonksiyonel Tıp & Sezgisel Beslenme
                </div>
              </div>
            </div>

            {/* Floating Live Badge 1: MoodNutri */}
            <div 
              className="glass-panel animate-float"
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-15px',
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: 'var(--shadow-md)',
                borderRadius: '20px',
                backgroundColor: 'var(--bg-surface)'
              }}
            >
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--color-accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}
              >
                ✨
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '0.04em' }}>
                  ÖZGÜN USP
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  MoodNutri™ Modülü
                </div>
              </div>
            </div>

            {/* Floating Live Badge 2: Affirmation card */}
            <div 
              className="glass-panel"
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-20px',
                padding: '1rem 1.35rem',
                maxWidth: '280px',
                boxShadow: 'var(--shadow-lg)',
                borderRadius: '20px',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-surface)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <Smile size={16} color="var(--color-primary)" />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  GÜNÜN FARKINDALIĞI
                </span>
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.45, margin: 0 }}>
                "Beslenmek bir ceza veya ödül değil; her lokmada bedenine sunduğun bir özşefkattir."
              </p>
            </div>
          </div>
        </div>

        {/* Live Metrics Bar */}
        <div 
          className="glass-panel"
          style={{
            marginTop: '4.5rem',
            padding: '2rem 2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>
              1.250+
            </div>
            <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>Mutlu & Sağlıklı Danışan</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Online & Yüz Yüze Danışmanlık</div>
          </div>

          <div style={{ borderLeft: '1px solid var(--border-subtle)', borderRight: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-accent)', fontFamily: 'var(--font-heading)' }}>
              %96
            </div>
            <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>Kalıcı Alışkanlık Oranı</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Geri Kilo Almama & Koruma Başarısı</div>
          </div>

          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)' }}>
              8+ Yıl
            </div>
            <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>Klinik & Bilimsel Deneyim</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Hacettepe & Fonksiyonel Beslenme</div>
          </div>
        </div>
      </div>
    </section>
  );
};
