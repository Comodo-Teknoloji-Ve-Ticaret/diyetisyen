import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  HeartHandshake, 
  CheckCircle, 
  XCircle, 
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
            <span>Hakkımda</span>
          </div>
          <h2 className="section-title">
            Kalori saymaktan fazlası:{' '}
            <span style={{ color: 'var(--color-primary-text)' }}>sizi dinleyen bir süreç</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            İyi bir beslenme planı, uygulanabildiği kadar iyidir. Bu yüzden önce sizi ve gününüzün nasıl geçtiğini tanıyorum.
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
              Merhaba, ben Emir Yontar
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.025rem' }}>
              Hacettepe Üniversitesi Beslenme ve Diyetetik Bölümü’nden mezun oldum ve sekiz yıldır danışanlarla çalışıyorum.
              Bu sürede gördüğüm şey şu: çoğu insan iradesiz değil, sadece <strong>hayatına uymayan listelerle</strong> uğraşıyor.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.025rem' }}>
              Görüşmelerde iş temponuzu, uykunuzu, ne zaman acıktığınızı ve hangi yemekleri sevdiğinizi konuşuruz.
              Planı buna göre hazırlar, her hafta birlikte güncelleriz. Kan tahlili gerektiren durumlarda
              hekiminizle uyumlu çalışırım; <strong>duygusal yeme</strong> ve <strong>sindirim sorunları</strong> en sık ilgilendiğim konular.
            </p>

            {/* Credentials Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
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
                <Award size={24} color="var(--color-primary-text)" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Hacettepe Üniversitesi</div>
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
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Sporcu Beslenmesi</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sertifika Programı</div>
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
                src="./saglikli-tabak.jpg" 
                alt="Avokado, yumurta ve sebzelerden oluşan bir tabak"
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
              <HeartHandshake size={32} color="var(--color-primary-text)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: 1.5 }}>
                Planınızda evde pişen yemekler, dışarıda yediğiniz günler ve sevdiğiniz tatlılar da var.
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Module: Old Diet vs. Holistic Nutrition */}
        <div 
          className="glass-panel panel-pad"
          style={{
            padding: '2.5rem',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: '28px',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary-text)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              YAKLAŞIMIM
            </div>
            <h3 style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>
              Şok diyetlerden farkı ne?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              İki yaklaşımı yan yana görün:
            </p>

            {/* Toggle Controls */}
            <div 
              style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
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
                <CheckCircle size={16} />
                <span>Benim yaklaşımım</span>
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
                <span>Şok diyetler</span>
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
                  <CheckCircle size={22} color="var(--color-primary-text)" />
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-text)' }}>Önce sizi tanıyorum</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                  Kilonuzla birlikte tahlilleriniz, uykunuz, iş saatleriniz ve yemek alışkanlıklarınız da planın bir parçası.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '18px', backgroundColor: 'var(--color-primary-light)', border: '1px solid rgba(45, 106, 79, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <CheckCircle size={22} color="var(--color-primary-text)" />
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-text)' }}>Duygusal yemeyi konuşuyoruz</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                  Stresli günlerde neden mutfağa yöneldiğinizi birlikte buluyor, o anlar için uygulanabilir alternatifler belirliyoruz.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '18px', backgroundColor: 'var(--color-primary-light)', border: '1px solid rgba(45, 106, 79, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <CheckCircle size={22} color="var(--color-primary-text)" />
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-text)' }}>Yasak listesi yok</h4>
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
                  <h4 style={{ fontSize: '1.1rem', color: '#943822' }}>Sürekli açlık</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: '#4A251C', lineHeight: 1.6 }}>
                  Günde 800-1000 kaloriyle uzun süre devam etmek zor; açlık ve yorgunluk bir noktada bırakmanıza yol açıyor.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '18px', backgroundColor: '#FDF0ED', border: '1px solid rgba(224, 122, 95, 0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <XCircle size={22} color="#C9664C" />
                  <h4 style={{ fontSize: '1.1rem', color: '#943822' }}>Verip geri almak</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: '#4A251C', lineHeight: 1.6 }}>
                  Diyet bittiği gün verilen kilolar hızla geri alınır; çünkü kişi yeni bir yaşam tarzı değil, geçici bir ceza süreci yaşamıştır.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '18px', backgroundColor: '#FDF0ED', border: '1px solid rgba(224, 122, 95, 0.25)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                  <XCircle size={22} color="#C9664C" />
                  <h4 style={{ fontSize: '1.1rem', color: '#943822' }}>Suçluluk ve bırakma</h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: '#4A251C', lineHeight: 1.6 }}>
                  Bir dilim pasta yüzünden "zaten bozdum" deyip tüm günü bırakmak, şok diyetlerde çok sık görülüyor.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
