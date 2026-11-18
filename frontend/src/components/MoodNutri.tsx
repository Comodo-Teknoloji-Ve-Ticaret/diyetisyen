import React, { useState } from 'react';
import { 
  Brain, 
  CloudLightning,
  BatteryLow,
  Cookie,
  HeartCrack,
  CloudFog,
  Leaf,
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

  const moodIcon = (id: string, size: number) => {
    const props = { size, strokeWidth: 1.75 };
    switch (id) {
      case 'stressed': return <CloudLightning {...props} />;
      case 'fatigued': return <BatteryLow {...props} />;
      case 'sugar_craving': return <Cookie {...props} />;
      case 'emotional_hunger': return <HeartCrack {...props} />;
      case 'brain_fog': return <CloudFog {...props} />;
      default: return <Leaf {...props} />;
    }
  };

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
          <div className="section-tag">
            <Brain size={16} />
            <span>Duygusal Yeme</span>
          </div>
          <h2 className="section-title">
            Bugün nasıl hissediyorsunuz?{' '}
            <span style={{ color: 'var(--color-primary-text)' }}>Ona göre ne yiyebilirsiniz?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Yorgun, stresli ya da canınız tatlı çekiyorsa, aşağıdan size en yakın durumu seçin.
            Kısa bir açıklama, birkaç besin önerisi ve 5 dakikada hazırlanan bir tarif göreceksiniz.
          </p>
        </div>

        {/* Mood Selector Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(150px, 45%), 1fr))',
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
                  border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-surface)',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isSelected ? 'translateY(-4px)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.6rem', color: isSelected ? 'var(--color-primary)' : 'var(--text-muted)' }}>{moodIcon(item.id, 30)}</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: isSelected ? 'var(--color-primary)' : 'var(--text-main)', marginBottom: '0.2rem' }}>
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
          key={selectedItem.id}
          className="glass-panel panel-pad"
          style={{
            padding: '2.75rem',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: '28px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-light)',
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
                  backgroundColor: 'var(--color-primary-light)',
                  color: 'var(--color-primary-text)',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {moodIcon(selectedItem.id, 28)}
              </div>
              <div>
                <span 
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--color-primary-light)',
                    color: 'var(--color-primary-text)'
                  }}
                >
                  {selectedItem.badge}
                </span>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-main)', marginTop: '0.35rem' }}>
                  {selectedItem.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onOpenAppointment}
              className="btn btn-accent"
              style={{ fontSize: '0.9rem', padding: '0.65rem 1.25rem' }}
            >
              <span>Bu konuda görüşelim</span>
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
              <Brain size={20} color="var(--color-primary-text)" />
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                Neden böyle hissediyor olabilirsiniz?
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
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
                <CheckCircle size={20} color="var(--color-primary-text)" />
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-text)' }}>
                  Bunları deneyin
                </h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {selectedItem.recommendedFoods.map((food, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <span style={{ color: 'var(--color-primary-text)', fontWeight: 700 }}>•</span>
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
                  Bunları azaltın
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
              gap: '1.5rem'
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
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.35rem 1rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <UtensilsCrossed size={18} color="var(--color-primary-text)" />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>
                    {selectedItem.quickRecipe.name}
                  </h4>
                </div>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                  <Clock size={14} />
                  {selectedItem.quickRecipe.prepTime}
                </span>
              </div>

              <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                Malzemeler
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {selectedItem.quickRecipe.ingredients.map((ing, i) => (
                  <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    – {ing}
                  </li>
                ))}
              </ul>

              <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                Hazırlanışı
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
                    Kısa bir mola
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
                Bu öneriler genel bilgilendirme amaçlıdır. Sık tekrarlayan yeme atakları yaşıyorsanız bir uzmanla görüşmenizi öneririm.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
