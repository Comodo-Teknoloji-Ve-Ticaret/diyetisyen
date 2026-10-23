import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2
} from 'lucide-react';

import { FAQ_DATA, CLINIC_INFO } from '../data/contentData';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="iletisim" className="section" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <div className="section-tag">
            <HelpCircle size={16} />
            <span>Merak Edilenler & İletişim</span>
          </div>
          <h2 className="section-title">
            Aklınıza Takılan Sorular &{' '}
            <span style={{ color: 'var(--color-primary)' }}>Kliniğimize Ulaşın</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Sağlıklı bir başlangıç yapmadan önce bilmek istediğiniz her şey şeffaflıkla burada.
          </p>
        </div>

        {/* 2-Column: FAQs on Left, Contact on Right */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem'
          }}
        >
          {/* Left Column: Interactive FAQ Accordion */}
          <div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              Sıkça Sorulan Sorular
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {FAQ_DATA.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="glass-panel"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderRadius: '16px',
                      border: '1px solid var(--border-light)',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      style={{
                        width: '100%',
                        padding: '1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.975rem',
                        fontWeight: 700,
                        color: isOpen ? 'var(--color-primary)' : 'var(--text-main)',
                        gap: '0.75rem'
                      }}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>

                    {isOpen && (
                      <div 
                        style={{
                          padding: '0 1.25rem 1.25rem 1.25rem',
                          color: 'var(--text-muted)',
                          fontSize: '0.925rem',
                          lineHeight: 1.7,
                          borderTop: '1px solid var(--border-subtle)',
                          paddingTop: '0.85rem'
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact & Quick Message */}
          <div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              Bize Hızlıca Yazın
            </h3>

            {/* Quick Contact Form */}
            <div 
              className="glass-panel"
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '2rem'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                  <CheckCircle2 size={44} color="var(--color-primary)" style={{ margin: '0 auto 0.75rem auto' }} />
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
                    Mesajınız Alındı!
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
                    Klinik asistanımız çalışma saatleri içinde en kısa sürede dönüş sağlayacaktır.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ad Soyad"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--bg-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0532 000 00 00"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--bg-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Mesajınız veya Sorunuz
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Size nasıl yardımcı olabiliriz?"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '12px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: 'var(--bg-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.9rem',
                        resize: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '0.85rem', fontSize: '0.95rem' }}
                  >
                    <Send size={16} />
                    <span>Mesajı Gönder</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '16px',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem'
                }}
              >
                <MessageCircle size={22} />
                <div>
                  <div>WhatsApp Hızlı Danışma Hattı</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.9, fontWeight: 500 }}>{CLINIC_INFO.whatsapp}</div>
                </div>
              </a>

              <div style={{ padding: '1rem 1.25rem', borderRadius: '16px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <MapPin size={22} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Klinik:</strong> {CLINIC_INFO.address}
                </div>
              </div>

              <div style={{ padding: '1rem 1.25rem', borderRadius: '16px', backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <Clock size={22} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Çalışma Saatleri:</strong> {CLINIC_INFO.workingHours}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
