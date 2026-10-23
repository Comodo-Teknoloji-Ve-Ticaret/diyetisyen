import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Calendar, 
  User, 
  Sun, 
  Moon, 
  Menu, 
  X,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { CLINIC_INFO } from '../data/contentData';

interface NavbarProps {
  onOpenAppointment: () => void;
  onOpenPortal: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAppointment,
  onOpenPortal,
  theme,
  toggleTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Hakkımda', href: '#hakkimda' },
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Akıllı Araçlar', href: '#akilli-araclar' },
    { label: 'MoodNutri™', href: '#moodnutri', highlight: true },
    { label: 'Danışan Yorumları', href: '#yorumlar' },
    { label: 'SSS & İletişim', href: '#iletisim' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled 
          ? (theme === 'dark' ? 'rgba(14, 24, 19, 0.92)' : 'rgba(251, 249, 245, 0.92)')
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-light)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.65rem',
            textDecoration: 'none'
          }}
        >
          <div 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <Leaf size={22} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: 1.1 }}>
              {CLINIC_INFO.name}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.04em' }}>
              BÜTÜNSEL BESLENME KLİNİĞİ
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '1.75rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.925rem',
                fontWeight: link.highlight ? 700 : 500,
                color: link.highlight ? 'var(--color-accent)' : 'var(--text-main)',
                transition: 'color 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = link.highlight ? 'var(--color-accent-hover)' : 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = link.highlight ? 'var(--color-accent)' : 'var(--text-main)';
              }}
            >
              {link.highlight && <Sparkles size={14} />}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Tema Değiştir"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title={theme === 'dark' ? 'Aydınlık Moda Geç' : 'Karanlık Moda Geç'}
          >
            {theme === 'dark' ? <Sun size={18} color="#F4A261" /> : <Moon size={18} color="var(--color-primary)" />}
          </button>

          {/* Client Portal Button */}
          <button
            onClick={onOpenPortal}
            className="btn btn-secondary portal-nav-btn"
            style={{
              padding: '0.65rem 1.15rem',
              fontSize: '0.875rem',
              display: 'none'
            }}
          >
            <User size={16} />
            <span>Danışan Portalı</span>
          </button>

          {/* Appointment CTA */}
          <button
            onClick={onOpenAppointment}
            className="btn btn-primary"
            style={{
              padding: '0.65rem 1.35rem',
              fontSize: '0.875rem'
            }}
          >
            <Calendar size={16} />
            <span>Randevu Al</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü Aç"
            className="mobile-menu-trigger"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              border: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-main)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-light)',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: link.highlight ? 'var(--color-accent)' : 'var(--text-main)',
                padding: '0.5rem 0',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {link.highlight && <Sparkles size={16} />}
              {link.label}
            </a>
          ))}
          <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)', margin: '0.5rem 0' }} />
          <button
            onClick={() => {
              handleLinkClick();
              onOpenPortal();
            }}
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <User size={18} />
            Danışan Portalı Demo Girişi
          </button>
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="btn btn-ghost"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
          >
            <PhoneCall size={16} />
            {CLINIC_INFO.phone}
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .portal-nav-btn {
            display: inline-flex !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
