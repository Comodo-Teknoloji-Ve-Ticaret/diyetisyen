import React, { useState } from 'react';
import { 
  Sparkles, 
  Brain, 
  CheckCircle, 
  XCircle, 
  UtensilsCrossed, 
  Wind, 
  ArrowRight,
  Clock
} from 'lucide-react';
import { MOOD_NUTRI_DATA } from '../data/contentData';
import type { MoodType, MoodNutriItem } from '../types';


interface MoodNutriProps {
  onOpenAppointment: () => void;
}

export const MoodNutri: React.FC<MoodNutriProps> = ({ onOpenAppointment }) => {
  const [selectedMoodId, setSelectedMoodId] = useState<MoodType>('stressed');

  const selectedItem: MoodNutriItem = 
    MOOD_NUTRI_DATA.find(item => item.id === selectedMoodId) || MOOD_NUTRI_DATA[0];

  return (
    <section 
      id="moodnutri" 
      className="section"
      style={{
        background: 'linear-gradient(180deg, var(--bg-subtle) 0%, var(--bg-main) 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div 
            className="section-tag"
            style={{
              backgroundColor: '#F3E8FF',
              color: '#8338EC',
              border: '1px solid rgba(131, 56, 236, 0.25)'
            }}
          >
            <Sparkles size={16} />
            <span>Sektörde Bir İlk • Kliniğimize Özgü USP</span>
          </div>
          <h2 className="section-title">
            MoodNutri™:{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, #8338EC 0%, var(--color-accent) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Duygu Durumuna Göre Beslenme Rehberi
            </span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Yemek seçimlerimizin %80’i mideden değil, duygularımız ve nörotransmitter dengesizliğimizden kaynaklanır. 
            Şu an kendinizi nasıl hissediyorsunuz? Seçin, biyolojinizin çağrısına uygun beslenme reçetesini anında alın.
          </p>
        </div>

        {/* Mood Selector Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          {MOOD_NUTRI_DATA.map((item) => {
            const isSelected = item.id === selectedMoodId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedMoodId(item.id)}
                style={{
                  padding: '1.25rem 1rem',
                  borderRadius: '20px',
                  border: isSelected ? '2px solid #8338EC' : '1px solid var(--border-light)',
                  backgroundColor: isSelected ? 'var(--bg-surface)' : 'var(--bg-surface)',
                  boxShadow: isSelected ? '0 10px 24px rgba(131, 56, 236, 0.2)' : 'var(--shadow-sm)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isSelected ? 'translateY(-4px)' : 'none'
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>{item.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: isSelected ? '#8338EC' : 'var(--text-main)', marginBottom: '0.2rem' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                  {item.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Mood Detail Box */}
        <div 
          className="glass-panel"
          style={{
            padding: '2.75rem',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: '28px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(131, 56, 236, 0.2)',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          {/* Top Header of Selected Mood */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '1.75rem',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  backgroundColor: '#F3E8FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem'
                }}
              >
                {selectedItem.emoji}
              </div>
              <div>
                <span 
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#F3E8FF',
                    color: '#8338EC'
                  }}
                >
                  {selectedItem.badge}
                </span>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-main)', marginTop: '0.35rem' }}>
                  {selectedItem.title} Modundasınız
                </h3>
              </div>
            </div>

            <button
              onClick={onOpenAppointment}
              className="btn btn-accent"
              style={{ fontSize: '0.9rem', padding: '0.65rem 1.25rem' }}
            >
              <span>MoodNutri Danışmanlığı Al</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Biological Root Cause Explanation */}
          <div 
            style={{
              backgroundColor: 'var(--bg-subtle)',
              padding: '1.5rem',
              borderRadius: '20px',
              marginBottom: '2.5rem',
              border: '1px solid var(--border-light)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Brain size={20} color="#8338EC" />
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                Bedeninizin Biyokimyasal Çağrısı (Neden Böyle Hissediyorsunuz?)
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
              {selectedItem.biochemistryReason}
            </p>
          </div>

          {/* 2-Column: Eat vs. Avoid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '2.5rem'
            }}
          >
            {/* Foods to Eat */}
            <div 
              style={{
                backgroundColor: 'var(--color-primary-light)',
                padding: '1.75rem',
                borderRadius: '20px',
                border: '1px solid rgba(45, 106, 79, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <CheckCircle size={20} color="var(--color-primary)" />
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>
                  Şu An Tüketilmesi Önerilenler
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {selectedItem.recommendedFoods.map((food, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>•</span>
                    <span>{food}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Foods to Avoid */}
            <div 
              style={{
                backgroundColor: 'var(--color-accent-light)',
                padding: '1.75rem',
                borderRadius: '20px',
                border: '1px solid rgba(224, 122, 95, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <XCircle size={20} color="var(--color-accent)" />
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-accent)' }}>
                  Şu An Uzak Durulması Gerekenler
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {selectedItem.foodsToAvoid.map((food, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>•</span>
                    <span>{food}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Recipe & Mindful Practice Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Quick Emergency Recipe */}
            <div 
              style={{
                backgroundColor: 'var(--bg-subtle)',
                padding: '1.75rem',
                borderRadius: '20px',
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <UtensilsCrossed size={18} color="var(--color-primary)" />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>
                    {selectedItem.quickRecipe.name}
                  </h4>
                </div>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <Clock size={14} />
                  {selectedItem.quickRecipe.prepTime}
                </span>
              </div>

              <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                MALZEMELER:
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {selectedItem.quickRecipe.ingredients.map((ing, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    ✓ {ing}
                  </li>
                ))}
              </ul>

              <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                HAZIRLANIŞI:
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.5 }}>
                {selectedItem.quickRecipe.instructions}
              </p>
            </div>

            {/* Mindfulness Exercise */}
            <div 
              style={{
                backgroundColor: 'var(--bg-subtle)',
                padding: '1.75rem',
                borderRadius: '20px',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Wind size={20} color="#2A9D8F" />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>
                    30 Saniyelik Zihinsel & Beden Molası
                  </h4>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {selectedItem.mindfulPractice}
                </p>
              </div>

              <div 
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                🌿 <em>"Duygularını bastırmak için yemek yeme; duygularını anla, bedenini şifalandır."</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
