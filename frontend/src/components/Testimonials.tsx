import React, { useState } from 'react';
import { 
  Quote, 
  Star, 
  Heart, 
  Sparkles, 
  ArrowRight,
  TrendingDown
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/contentData';

interface TestimonialsProps {
  onOpenAppointment: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenAppointment }) => {
  const [selectedTag, setSelectedTag] = useState<string>('Hepsi');

  const tags = ['Hepsi', 'Sürdürülebilir Kilo', 'Bağırsak Sağlığı', 'Duygusal Açlık'];

  const filtered = selectedTag === 'Hepsi'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter(t => t.tags.includes(selectedTag));

  return (
    <section id="yorumlar" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <div className="section-tag">
            <Heart size={16} />
            <span>Gerçek Danışan Dönüşümleri</span>
          </div>
          <h2 className="section-title">
            Bedenleriyle Barışanların{' '}
            <span style={{ color: 'var(--color-primary)' }}>İlham Veren Hikayeleri</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Sadece tartıdaki rakamlar değil; kazanılan yaşam enerjisi, kaybolan tatlı krizleri ve düzelen kan tahlilleri.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.65rem', marginTop: '1.5rem' }}>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: selectedTag === tag ? '1px solid var(--color-primary)' : '1px solid var(--border-light)',
                  backgroundColor: selectedTag === tag ? 'var(--color-primary)' : 'var(--bg-surface)',
                  color: selectedTag === tag ? '#FFFFFF' : 'var(--text-muted)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem'
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                padding: '2.25rem',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-light)',
                transition: 'transform 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                {/* Top Quote Icon & Stars */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <Quote size={32} color="var(--color-secondary)" style={{ opacity: 0.8 }} />
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#F4A261" color="#F4A261" />
                    ))}
                  </div>
                </div>

                {/* Achievement Badge */}
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: 'var(--color-secondary-light)',
                    color: 'var(--color-primary)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    marginBottom: '1rem'
                  }}
                >
                  <TrendingDown size={14} />
                  <span>{item.achievement}</span>
                </div>

                {/* Quote Text */}
                <p style={{ fontSize: '0.975rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{item.quote}"
                </p>
              </div>

              <div>
                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {item.tags.map((t, idx) => (
                    <span 
                      key={idx}
                      style={{
                        fontSize: '0.725rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--bg-subtle)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Author Info */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  <img
                    src={item.avatar}
                    alt={item.clientName}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                      {item.clientName}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {item.occupation}, {item.age} yaş • {item.timeframe}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div 
          className="glass-panel"
          style={{
            padding: '2.5rem 3rem',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, #173829 100%)',
            color: '#FFFFFF',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 700, color: '#D8F3DC', marginBottom: '0.5rem' }}>
              <Sparkles size={16} />
              <span>Sıradaki Başarı Hikayesi Neden Sen Olmayasın?</span>
            </div>
            <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Kısıtlamalardan Özgürleşmeye Hazır mısınız?
            </h3>
            <p style={{ color: '#E8F5E9', fontSize: '0.95rem', margin: 0, opacity: 0.9 }}>
              15 dakikalık ücretsiz ön değerlendirme seansımızda sağlık hedeflerinizi konuşalım.
            </p>
          </div>

          <button
            onClick={onOpenAppointment}
            className="btn btn-accent"
            style={{ padding: '0.95rem 1.85rem', fontSize: '1rem' }}
          >
            <span>Ön Değerlendirme Randevusu Al</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
