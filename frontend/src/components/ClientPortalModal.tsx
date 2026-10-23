import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Flame, 
  Droplet, 
  CheckCircle2, 
  Circle, 
  MessageSquare, 
  TrendingDown, 
  Award,
  Sparkles
} from 'lucide-react';

import { CLINIC_INFO } from '../data/contentData';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const [completedMeals, setCompletedMeals] = useState<{ [key: string]: boolean }>({
    breakfast: true,
    lunch: true,
    snack: false,
    dinner: false
  });

  const [clientQuestion, setClientQuestion] = useState('');
  const [questionSent, setQuestionSent] = useState(false);

  if (!isOpen) return null;

  const toggleMeal = (mealKey: string) => {
    setCompletedMeals(prev => ({ ...prev, [mealKey]: !prev[mealKey] }));
  };

  const handleSendQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientQuestion) return;
    setQuestionSent(true);
    setTimeout(() => {
      setQuestionSent(false);
      setClientQuestion('');
    }, 3500);
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1300,
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
          maxWidth: '840px',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '28px',
          padding: '2.5rem',
          position: 'relative',
          maxHeight: '92vh',
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

        {/* Portal Header */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '2rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div 
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
                fontWeight: 800,
                fontSize: '1.25rem'
              }}
            >
              SD
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1.45rem', margin: 0, color: 'var(--text-main)' }}>
                  Sena Demirhan
                </h2>
                <span 
                  style={{
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--color-secondary-light)',
                    color: 'var(--color-primary)'
                  }}
                >
                  Aktif Danışan • 3. Hafta
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
                Danışman Diyetisyen: <strong>{CLINIC_INFO.name}</strong> • Program: Sürdürülebilir Kilo Yönetimi
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-muted)', backgroundColor: 'var(--bg-subtle)', padding: '0.5rem 0.9rem', borderRadius: '12px' }}>
            <Calendar size={16} color="var(--color-primary)" />
            <span>Bir Sonraki Seans: <strong>30 Ekim 15:30 (Online)</strong></span>
          </div>
        </div>

        {/* Metrics Row: Weight & Progress */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '18px', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>BAŞLANGIÇ KİLOSU</div>
            <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-main)' }}>72.4 kg</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>12 Ekim 2026</div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '18px', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>GÜNCEL TARTI</div>
            <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--color-primary)' }}>68.8 kg</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 700 }}>
              <TrendingDown size={14} /> -3.6 kg Sağlıklı Yağ Kaybı
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: '18px', border: '1px solid var(--border-light)' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>HEDEF KİLO</div>
            <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--color-accent)' }}>64.0 kg</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Hedefe Kalan: 4.8 kg</div>
          </div>
        </div>

        {/* Today's Daily Targets & Dietitian Coaching Note */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}
        >
          {/* Today's Calorie & Water Progress */}
          <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border-light)' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={18} color="var(--color-primary)" />
              Bugünkü Alışkanlık İlerlemesi
            </h4>

            {/* Calorie Bar */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Flame size={15} color="#E07A5F" />
                  Kalori: <strong>1.320 / 1.650 kcal</strong>
                </span>
                <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>%80</span>
              </div>
              <div style={{ height: '8px', backgroundColor: 'var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '80%', height: '100%', backgroundColor: 'var(--color-accent)' }} />
              </div>
            </div>

            {/* Water Bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Droplet size={15} color="var(--color-teal)" />
                  Su: <strong>2.000 / 2.400 ml</strong>
                </span>
                <span style={{ fontWeight: 700, color: 'var(--color-teal)' }}>%83</span>
              </div>
              <div style={{ height: '8px', backgroundColor: 'var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '83%', height: '100%', backgroundColor: 'var(--color-teal)' }} />
              </div>
            </div>
          </div>

          {/* Dyt. Sena's Live Coaching Note */}
          <div 
            style={{
              backgroundColor: 'var(--color-primary-light)',
              padding: '1.5rem',
              borderRadius: '20px',
              border: '1px solid rgba(45, 106, 79, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Sparkles size={18} color="var(--color-primary)" />
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-primary)' }}>
                  Dyt. Sena Alkan’ın Günlük Koçluk Notu
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                "Sena harika gidiyorsun! Dün akşam tatlı krizinde MoodNutri elma-tarçın tarifini uygulaman ve açlık skalasını hatırlaman mükemmel bir adımdı. Bugün öğle yemeğindeki kinoa salatana 1 tatlı kaşığı zeytinyağını çiğ eklemeyi unutma."
              </p>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600, marginTop: '0.75rem' }}>
              Bugün 09:15’te güncellendi
            </div>
          </div>
        </div>

        {/* Interactive Today's Meal Plan Checklist */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>
              Bugünkü Kişiselleştirilmiş Menünüz
            </h4>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Tıklayarak yedim olarak işaretleyin
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { key: 'breakfast', title: 'Kahvaltı (08:30)', menu: '2 adet haşlanmış organik yumurta, 5 adet az tuzlu zeytin, yarım avokado, bol roka-maydanoz ve 1 dilim ekşi mayalı siyez ekmeği.' },
              { key: 'lunch', title: 'Öğle Yemeği (13:00)', menu: 'Izgara levrek veya somon (150g), 4 yemek kaşığı haşlanmış kinoa, nar ekşili ve cevizli taze yeşil salata.' },
              { key: 'snack', title: 'İkindi Ara Öğünü (16:30)', menu: '1 fincan beyaz çay, 1 adet Medjool hurma içine 2 adet çiğ ceviz, bol tarçın serpilmiş fırın elma dilimleri.' },
              { key: 'dinner', title: 'Akşam Yemeği (19:30)', menu: 'Zencefilli ve zerdeçallı mercimek çorbası (1 kase), zeytinyağlı taze fasulye, 3 kaşık ev yapımı probiyotik yoğurt.' }
            ].map((meal) => {
              const isChecked = completedMeals[meal.key];
              return (
                <div
                  key={meal.key}
                  onClick={() => toggleMeal(meal.key)}
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '16px',
                    backgroundColor: isChecked ? 'var(--color-secondary-light)' : 'var(--bg-subtle)',
                    border: isChecked ? '1px solid var(--color-secondary)' : '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isChecked ? (
                    <CheckCircle2 size={24} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  ) : (
                    <Circle size={24} color="var(--text-light)" style={{ flexShrink: 0 }} />
                  )}

                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: isChecked ? 'var(--color-primary)' : 'var(--text-main)', textDecoration: isChecked ? 'line-through' : 'none' }}>
                      {meal.title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: isChecked ? 'var(--text-muted)' : 'var(--text-main)', marginTop: '0.2rem', opacity: isChecked ? 0.8 : 1 }}>
                      {meal.menu}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ask Question to Dietitian Form */}
        <div 
          style={{
            backgroundColor: 'var(--bg-subtle)',
            padding: '1.5rem',
            borderRadius: '20px',
            border: '1px solid var(--border-light)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <MessageSquare size={18} color="var(--color-primary)" />
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', margin: 0 }}>
              Diyetisyeninize Hızlı Soru Sorun
            </h4>
          </div>

          {questionSent ? (
            <div style={{ padding: '0.85rem', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 600 }}>
              ✓ Sorunuz Dyt. Sena Alkan’a iletildi. WhatsApp üzerinden 30 dakika içinde yanıtlanacaktır.
            </div>
          ) : (
            <form onSubmit={handleSendQuestion} style={{ display: 'flex', gap: '0.75rem' }}>
              <input
                type="text"
                placeholder="Örn: Akşam dışarıda yemek yiyeceğim, ne tercih etmeliyim?"
                value={clientQuestion}
                onChange={(e) => setClientQuestion(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.8rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-main)',
                  fontSize: '0.9rem'
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '0.8rem 1.4rem', fontSize: '0.9rem', flexShrink: 0 }}
              >
                Gönder
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
