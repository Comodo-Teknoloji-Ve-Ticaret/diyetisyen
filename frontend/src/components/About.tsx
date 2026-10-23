import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  HeartHandshake, 
  CheckCircle, 
  XCircle, 
  Sparkles,
  GraduationCap
} from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'holistic' | 'restrictive'>('holistic');

  return (
    <section id="hakkimda" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-tag">
            <GraduationCap size={16} />
            <span>Bilim, Biyokimya ve Empati</span>
          </div>
          <h2 className="section-title">
            Diyetisyenin Sadece Kalori Saymaz;{' '}
            <span style={{ color: 'var(--color-primary)' }}>Ruhunu ve Hormonlarını da Dinler</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            "Beslenmeyi bir kısıtlama zinciri değil; bedeninizle kurduğunuz en derin, en şefkatli dostluk olarak görüyorum."
          </p>
        </div>

        {/* 2-Column Story & Credentials */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '4.5rem'
          }}
        >
          {/* Left Column: Personal Narrative */}
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Merhaba, Ben Dyt. Sena Alkan
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.025rem' }}>
              Hacettepe Üniversitesi Beslenme ve Diyetetik Bölümü’nden onur derecesiyle mezun olduktan sonra, 
              klasik diyet listelerinin neden %85 oranında başarısız olduğunu araştırmaya adandım. 
              Gördüm ki insanlar iradesiz değildi; aksine <strong>biyolojilerine ve ruhlarına aykırı</strong> kurallarla savaşıyorlardı.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.025rem' }}>
              İngiltere’de <em>Fonksiyonel Beslenme ve Bağırsak-Beyin Aksı</em> üzerine aldığım ileri klinik eğitimlerin ardından, 
              kliniğimde <strong>MoodNutri™ (Duygu Odaklı Beslenme)</strong> modelini geliştirdim. 
              Amacım; tartıdaki rakamın ötesine geçerek sizi yiyeceklerle barıştırmak, 
              enerjinizi geri kazandırmak ve ömür boyu sürecek bir hafiflik inşa etmektir.
            </p>

            {/* Credentials Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
              <div 
                className="glass-panel"
                style={{
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backgroundColor: 'var(--bg-surface)'
                }}
              >
                <Award size={24} color="var(--color-primary)" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Hacettepe Üniv.</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Beslenme ve Diyetetik</div>
                </div>
              </div>

              <div 
                className="glass-panel"
                style={{
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backgroundColor: 'var(--bg-surface)'
                }}
              >
                <BookOpen size={24} color="var(--color-accent)" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Fonksiyonel Tıp</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mikrobiyota Uzmanlığı</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Still Life with Quote */}
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                borderRadius: '28px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-light)'
              }}
            >
              <img 
                src="./healthy_bowl.jpg" 
                alt="Bütünsel ve Şefkatli Beslenme Tabağı"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            <div 
              className="glass-panel"
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                left: '20px',
                padding: '1.25rem 1.75rem',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <HeartHandshake size={32} color="var(--color-primary)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: 1.5 }}>
                "Sizi kalıplara sokan diyetler değil; sizin yaşamınıza uyum sağlayan beslenme özgürleştirir."
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Module: Old Diet vs. Holistic Nutrition */}
        <div 
          className="glass-panel"
          style={{
            padding: '2.5rem',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: '28px',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              FELSEFEMİZİN FARKI
            </div>
            <h3 style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>
              Neden Bizimle Başarıya Ulaşıyorsunuz?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Aşağıdaki iki yaklaşımı karşılaştırarak aradaki farkı keşfedin:
            </p>

            {/* Toggle Controls */}
            <div 
              style={{
                display: 'inline-flex',
                background: 'var(--bg-subtle)',
                padding: '0.4rem',
                borderRadius: 'var(--radius-full)',
                marginTop: '1.25rem',
                border: '1px solid var(--border-light)'
              }}
            >
              <button
                onClick={() => setActiveTab('holistic')}
                style={{
                  padding: '0.65rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: activeTab === 'holistic' ? 'var(--color-primary)' : 'transparent',
                  color: activeTab === 'holistic' ? '#FFFFFF' : 'var(--text-muted)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Sparkles size={16} />
                <span>Bütünsel & Sezgisel Yaklaşımımız (Bizim Yolumuz)</span>
              </button>

              <button
                onClick={() => setActiveTab('restrictive')}
                style={{
                  padding: '0.65rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: activeTab === 'restrictive' ? '#8A3B28' : 'transparent',
                  color: activeTab === 'restrictive' ? '#FFFFFF' : 'var(--text-muted)',
                  transition: 'all 0.25s ease'
                }}
              >
                <XCircle size={16} />
                <span>Eski Usul Kısıtlayıcı Diyetler (Geçici Çözüm)</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          {activeTab === 'holistic' ? (
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              <div style={{ padding: '1.5rem', borderRadius: '18px', backgroundColor: 'var(--color-primary-light)', border: '1px solid rgba(45, 106, 79, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <CheckCircle size={22} color="var(--color-primary)" />
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>Biyokimyasal Kök Neden Analizi</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                  Sadece kilonuza değil; insülin direnciniz, bağırsak mikrobiyotanız, tiroid hormonlarınız ve uyku kalitenize göre kişiye özel planlama yapılır.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '18px', backgroundColor: 'var(--color-primary-light)', border: '1px solid rgba(45, 106, 79, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <CheckCircle size={22} color="var(--color-primary)" />
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>MoodNutri™ Duygu Durumu Yönetimi</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                  Stresli veya üzgün olduğunuzda buzdolabına yönelmenin biyokimyasal sebebini çözüyor; açlığınızı değil duygularınızı yönetmeyi öğretiyoruz.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '18px', backgroundColor: 'var(--color-primary-light)', border: '1px solid rgba(45, 106, 79, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <CheckCircle size={22} color="var(--color-primary)" />
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>Yasak Yok, Kalıcı Alışkanlık Var</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                  Sosyal hayatınızdan kopmadan, sevdiğiniz tatlıyı veya akşam yemeğini suçluluk duymadan dengelemeyi öğrenirsiniz.
                </p>
              </div>
            </div>
          ) : (
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              <div style={{ padding: '1.5rem', borderRadius: '18px', backgroundColor: '#FDF0ED', border: '1px solid rgba(224, 122, 95, 0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <XCircle size={22} color="#C9664C" />
                  <h4 style={{ fontSize: '1.1rem', color: '#943822' }}>Şok Açlık & Yavaşlayan Metabolizma</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: '#4A251C', lineHeight: 1.6 }}>
                  Günde 800-1000 kaloriye mahkum edilen beden, hayatta kalma moduna geçerek tiroid hormonunu yavaşlatır ve yağ yakımını durdurur.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '18px', backgroundColor: '#FDF0ED', border: '1px solid rgba(224, 122, 95, 0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <XCircle size={22} color="#C9664C" />
                  <h4 style={{ fontSize: '1.1rem', color: '#943822' }}>Yo-Yo Sendromu (Verip Geri Alma)</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: '#4A251C', lineHeight: 1.6 }}>
                  Diyet bittiği gün verilen kilolar hızla geri alınır; çünkü kişi yeni bir yaşam tarzı değil, geçici bir ceza süreci yaşamıştır.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '18px', backgroundColor: '#FDF0ED', border: '1px solid rgba(224, 122, 95, 0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <XCircle size={22} color="#C9664C" />
                  <h4 style={{ fontSize: '1.1rem', color: '#943822' }}>Suçluluk & Yeme Bozukluğu</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: '#4A251C', lineHeight: 1.6 }}>
                  Bir dilim pasta yediğinde "battı balık yan gider" düşüncesiyle tıkınma nöbetlerine girmek, psikolojiyi derinden yaralar.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
