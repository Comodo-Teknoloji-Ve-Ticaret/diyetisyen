import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  Droplet, 
  Flame, 
  Activity, 
  RotateCcw, 
  Sparkles,
  Info,
  TrendingDown,
  TrendingUp,
  MinusCircle
} from 'lucide-react';
import type { 
  CalorieCalculatorInput, 
  CalorieCalculatorResult,
  Gender,
  ActivityLevel,
  NutritionGoal
} from '../types';

import { calculateNutrition } from '../data/contentData';

interface SmartToolsProps {
  onSaveToPortal?: (result: CalorieCalculatorResult) => void;
}

export const SmartTools: React.FC<SmartToolsProps> = ({ onSaveToPortal }) => {
  const [activeTool, setActiveTool] = useState<'calorie' | 'water'>('calorie');

  // Calorie Calculator State
  const [calcInput, setCalcInput] = useState<CalorieCalculatorInput>({
    age: 28,
    gender: 'female',
    height: 168,
    weight: 65,
    activityLevel: 'moderate',
    goal: 'lose_weight'
  });

  const [calcResult, setCalcResult] = useState<CalorieCalculatorResult>(() => 
    calculateNutrition({
      age: 28,
      gender: 'female',
      height: 168,
      weight: 65,
      activityLevel: 'moderate',
      goal: 'lose_weight'
    })
  );

  const [savedToPortalMessage, setSavedToPortalMessage] = useState(false);

  // Recalculate whenever inputs change
  useEffect(() => {
    const res = calculateNutrition(calcInput);
    setCalcResult(res);
  }, [calcInput]);

  // Water Tracker State
  const [waterGoal, setWaterGoal] = useState<number>(2400); // ml
  const [currentWater, setCurrentWater] = useState<number>(() => {
    const saved = localStorage.getItem('nutri_water_amount');
    return saved ? parseInt(saved, 10) : 1000;
  });
  const [goalReachedCelebrated, setGoalReachedCelebrated] = useState(false);

  useEffect(() => {
    localStorage.setItem('nutri_water_amount', currentWater.toString());
    if (currentWater >= waterGoal && !goalReachedCelebrated && currentWater > 0) {
      setGoalReachedCelebrated(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [currentWater, waterGoal, goalReachedCelebrated]);

  const addWater = (amount: number) => {
    setCurrentWater(prev => Math.min(prev + amount, 4500));
  };

  const resetWater = () => {
    setCurrentWater(0);
    setGoalReachedCelebrated(false);
  };

  const handleSaveToPortal = () => {
    localStorage.setItem('nutri_saved_calorie_target', calcResult.targetCalories.toString());
    localStorage.setItem('nutri_saved_protein', calcResult.macros.proteinGrams.toString());
    localStorage.setItem('nutri_saved_water_goal', (calcResult.waterNeedLiters * 1000).toString());
    setWaterGoal(Math.round(calcResult.waterNeedLiters * 1000));
    setSavedToPortalMessage(true);
    if (onSaveToPortal) {
      onSaveToPortal(calcResult);
    }
    setTimeout(() => setSavedToPortalMessage(false), 4000);
  };

  const waterPercentage = Math.min(Math.round((currentWater / waterGoal) * 100), 100);

  return (
    <section id="akilli-araclar" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <div className="section-tag">
            <Calculator size={16} />
            <span>Bilimsel & İnteraktif Modüller</span>
          </div>
          <h2 className="section-title">
            Bedeninizi Tanıyın:{' '}
            <span style={{ color: 'var(--color-primary)' }}>Akıllı Beslenme & Hidrasyon Asistanı</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Ezbere diyet listeleri yerine, Mifflin-St Jeor formülüyle metabolizma hızınızı ve su ihtiyacınızı saniyeler içinde öğrenin.
          </p>

          {/* Tool Tab Switcher */}
          <div 
            style={{
              display: 'inline-flex',
              background: 'var(--bg-surface)',
              padding: '0.4rem',
              borderRadius: 'var(--radius-full)',
              marginTop: '1.5rem',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <button
              onClick={() => setActiveTool('calorie')}
              style={{
                padding: '0.75rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.925rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: activeTool === 'calorie' ? 'var(--color-primary)' : 'transparent',
                color: activeTool === 'calorie' ? '#FFFFFF' : 'var(--text-muted)',
                transition: 'all 0.25s ease'
              }}
            >
              <Flame size={18} />
              <span>Akıllı Kalori & Makro Hesaplayıcı</span>
            </button>

            <button
              onClick={() => setActiveTool('water')}
              style={{
                padding: '0.75rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.925rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: activeTool === 'water' ? 'var(--color-teal)' : 'transparent',
                color: activeTool === 'water' ? '#FFFFFF' : 'var(--text-muted)',
                transition: 'all 0.25s ease'
              }}
            >
              <Droplet size={18} />
              <span>Dijital Su Takip Asistanı</span>
            </button>
          </div>
        </div>

        {/* TOOL 1: CALORIE & MACRO CALCULATOR */}
        {activeTool === 'calorie' && (
          <div 
            className="glass-panel"
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: '28px',
              boxShadow: 'var(--shadow-md)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              animation: 'fadeIn 0.3s ease'
            }}
          >
            {/* Form Controls */}
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Activity size={20} color="var(--color-primary)" />
                Bireysel Bilgilerinizi Girin
              </h3>

              {/* Gender selector */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Biyolojik Cinsiyet
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {(['female', 'male'] as Gender[]).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setCalcInput({ ...calcInput, gender: g })}
                      style={{
                        padding: '0.75rem',
                        borderRadius: '12px',
                        border: calcInput.gender === g ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                        backgroundColor: calcInput.gender === g ? 'var(--color-primary-light)' : 'var(--bg-subtle)',
                        color: calcInput.gender === g ? 'var(--color-primary)' : 'var(--text-main)',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {g === 'female' ? 'Kadın (BMR -161)' : 'Erkek (BMR +5)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Age, Height, Weight row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Yaş
                  </label>
                  <input
                    type="number"
                    min="15"
                    max="95"
                    value={calcInput.age}
                    onChange={(e) => setCalcInput({ ...calcInput, age: Math.max(15, parseInt(e.target.value) || 25) })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-main)',
                      fontWeight: 600,
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Boy (cm)
                  </label>
                  <input
                    type="number"
                    min="130"
                    max="220"
                    value={calcInput.height}
                    onChange={(e) => setCalcInput({ ...calcInput, height: Math.max(100, parseInt(e.target.value) || 165) })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-main)',
                      fontWeight: 600,
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Kilo (kg)
                  </label>
                  <input
                    type="number"
                    min="35"
                    max="200"
                    value={calcInput.weight}
                    onChange={(e) => setCalcInput({ ...calcInput, weight: Math.max(35, parseInt(e.target.value) || 60) })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-main)',
                      fontWeight: 600,
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              {/* Activity Level */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Günlük Aktivite Düzeyiniz
                </label>
                <select
                  value={calcInput.activityLevel}
                  onChange={(e) => setCalcInput({ ...calcInput, activityLevel: e.target.value as ActivityLevel })}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-main)',
                    fontWeight: 600,
                    fontSize: '0.925rem',
                    cursor: 'pointer'
                  }}
                >
                  <option value="sedentary">Masa Başı / Hareketsiz (Haftada 0 spor)</option>
                  <option value="light">Hafif Aktif (Haftada 1-2 gün yürüyüş/hafif spor)</option>
                  <option value="moderate">Orta Düzey (Haftada 3-5 gün düzenli egzersiz)</option>
                  <option value="active">Yüksek Aktif (Haftada 6-7 gün yoğun spor)</option>
                  <option value="very_active">Çok Yüksek / Atletik (Günde çift antrenman)</option>
                </select>
              </div>

              {/* Goal Selector */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Öncelikli Beslenme Hedefiniz
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                  {[
                    { id: 'lose_weight', label: 'Kilo Verme', icon: <TrendingDown size={16} /> },
                    { id: 'maintain', label: 'Kilo Koruma', icon: <MinusCircle size={16} /> },
                    { id: 'gain_muscle', label: 'Kas Kazanımı', icon: <TrendingUp size={16} /> }
                  ].map((target) => (
                    <button
                      key={target.id}
                      type="button"
                      onClick={() => setCalcInput({ ...calcInput, goal: target.id as NutritionGoal })}
                      style={{
                        padding: '0.75rem 0.5rem',
                        borderRadius: '12px',
                        border: calcInput.goal === target.id ? '2px solid var(--color-primary)' : '1px solid var(--border-light)',
                        backgroundColor: calcInput.goal === target.id ? 'var(--color-primary-light)' : 'var(--bg-subtle)',
                        color: calcInput.goal === target.id ? 'var(--color-primary)' : 'var(--text-main)',
                        fontSize: '0.825rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {target.icon}
                      <span>{target.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Calculation Results Card */}
            <div 
              style={{
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: '22px',
                padding: '2rem',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.04em' }}>
                    KİŞİYE ÖZEL HESAPLAMA SONUCU
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Mifflin-St Jeor Standardı
                  </span>
                </div>

                {/* Big Target Calorie Card */}
                <div 
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderRadius: '18px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    Hedef Günlük Kalori Alımı
                  </div>
                  <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
                    {calcResult.targetCalories}{' '}
                    <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>kcal / gün</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span>Bazal Hız (BMR): <strong>{calcResult.bmr} kcal</strong></span>
                    <span>Toplam Harcama (TDEE): <strong>{calcResult.tdee} kcal</strong></span>
                  </div>
                </div>

                {/* Macro Breakdown */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    GÜNLÜK HEDEF MAKRO DAĞILIMI
                  </div>

                  {/* Multi-colored bar */}
                  <div style={{ display: 'flex', height: '10px', borderRadius: '5px', overflow: 'hidden', marginBottom: '1rem' }}>
                    <div style={{ width: `${calcResult.macros.proteinPercent}%`, backgroundColor: '#457B9D' }} title="Protein" />
                    <div style={{ width: `${calcResult.macros.carbPercent}%`, backgroundColor: '#F4A261' }} title="Karbonhidrat" />
                    <div style={{ width: `${calcResult.macros.fatPercent}%`, backgroundColor: '#E07A5F' }} title="Yağ" />
                  </div>

                  {/* 3 Macro Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                    <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.75rem', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.75rem', color: '#457B9D', fontWeight: 700 }}>PROTEİN</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{calcResult.macros.proteinGrams}g</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>%{calcResult.macros.proteinPercent}</div>
                    </div>

                    <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.75rem', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.75rem', color: '#F4A261', fontWeight: 700 }}>KARBONHİDRAT</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{calcResult.macros.carbGrams}g</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>%{calcResult.macros.carbPercent}</div>
                    </div>

                    <div style={{ backgroundColor: 'var(--bg-surface)', padding: '0.75rem', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.75rem', color: '#E07A5F', fontWeight: 700 }}>SAĞLIKLI YAĞ</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>{calcResult.macros.fatGrams}g</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>%{calcResult.macros.fatPercent}</div>
                    </div>
                  </div>
                </div>

                {/* Dietitian Tip & Water need */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', backgroundColor: 'var(--bg-surface)', padding: '0.85rem', borderRadius: '14px', marginBottom: '1.25rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  <Info size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Klinik İpucu:</strong> {calcResult.tip}{' '}
                    <span>Önerilen günlük su miktarı: <strong>{calcResult.waterNeedLiters} Litre</strong>.</span>
                  </div>
                </div>
              </div>

              {/* Action Button: Save to Portal */}
              <div>
                <button
                  onClick={handleSaveToPortal}
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '0.925rem' }}
                >
                  <Sparkles size={16} />
                  <span>{savedToPortalMessage ? '✓ Hedefler Danışan Paneline Kaydedildi!' : 'Bu Planı Danışan Paneline Aktar'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 2: DIGITAL WATER TRACKER */}
        {activeTool === 'water' && (
          <div 
            className="glass-panel"
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: '28px',
              boxShadow: 'var(--shadow-md)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              animation: 'fadeIn 0.3s ease'
            }}
          >
            {/* Left: Interactive Visual Bottle / Glass */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div 
                style={{
                  width: '180px',
                  height: '320px',
                  borderRadius: '35px',
                  border: '4px solid var(--color-teal)',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-subtle)',
                  boxShadow: '0 12px 30px rgba(42, 157, 143, 0.25)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}
              >
                {/* Water Liquid Filling */}
                <div 
                  style={{
                    width: '100%',
                    height: `${waterPercentage}%`,
                    background: 'linear-gradient(180deg, #48CAE4 0%, #0096C7 50%, #03045E 100%)',
                    transition: 'height 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '1.25rem'
                  }}
                >
                  {/* Subtle top wave effect */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      left: 0,
                      right: 0,
                      height: '14px',
                      background: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%'
                    }}
                  />
                  <span>%{waterPercentage}</span>
                </div>

                {/* Target marker */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)'
                  }}
                >
                  Hedef: {waterGoal} ml
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-teal)', fontFamily: 'var(--font-heading)' }}>
                  {currentWater} <span style={{ fontSize: '1rem', fontWeight: 600 }}>/ {waterGoal} ml</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {waterPercentage >= 100 
                    ? '🎉 Tebrikler! Günlük hidrasyon hedefinize ulaştınız.' 
                    : `Hedefe kalan: ${Math.max(0, waterGoal - currentWater)} ml`}
                </div>
              </div>
            </div>

            {/* Right: Quick Action Buttons & Hydration Insights */}
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Droplet size={22} color="var(--color-teal)" />
                Su İçtikçe Tek Tıkla Kaydedin
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                Beyninizin %75’i, kaslarınızın %70’i sudur. Yeterli su içmek tokluk hissini destekler, 
                baş ağrılarını önler ve hücresel yağ yakım hızınızı %30 artırır.
              </p>

              {/* Quick Add Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                <button
                  type="button"
                  onClick={() => addWater(250)}
                  style={{
                    padding: '1rem',
                    borderRadius: '16px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-main)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-secondary-light)';
                    e.currentTarget.style.borderColor = 'var(--color-teal)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>🥛</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.95rem' }}>+250 ml Ekle</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>1 Su Bardağı</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => addWater(330)}
                  style={{
                    padding: '1rem',
                    borderRadius: '16px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-main)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-secondary-light)';
                    e.currentTarget.style.borderColor = 'var(--color-teal)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>☕</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.95rem' }}>+330 ml Ekle</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Büyük Kupa</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => addWater(500)}
                  style={{
                    padding: '1rem',
                    borderRadius: '16px',
                    border: '1px solid var(--border-light)',
                    backgroundColor: 'var(--bg-subtle)',
                    color: 'var(--text-main)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-secondary-light)';
                    e.currentTarget.style.borderColor = 'var(--color-teal)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>🍶</span>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.95rem' }}>+500 ml Ekle</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Spor Matarası</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={resetWater}
                  style={{
                    padding: '1rem',
                    borderRadius: '16px',
                    border: '1px dashed var(--border-light)',
                    backgroundColor: 'transparent',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <RotateCcw size={16} />
                  <span>Sıfırla</span>
                </button>
              </div>

              {/* Water Infusion Tip */}
              <div 
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '1.25rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.85rem'
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--color-teal)', marginBottom: '0.35rem' }}>
                  💡 Dyt. Sena’nın Hidrasyon İpucu:
                </div>
                <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                  "Sabah uyanır uyanmaz oda sıcaklığında 2 bardak ılık suya 2 damla limon ve bir çimdik kaya tuzu eklemek, 
                  adrenal bezlerinizi uyandırır ve sindirim ateşinizi başlatır."
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
