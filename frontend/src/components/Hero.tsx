import React from 'react';
import { ArrowRight, Calculator, Video, MapPin, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/contentData';

interface HeroProps {
  onOpenAppointment: () => void;
  onScrollToTools: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment, onScrollToTools }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="hero__eyebrow">{CLINIC_INFO.name} · Diyetisyen</p>

            <h1 className="hero__title">
              Yasaklarla değil, <span>hayatınıza uyan</span> bir beslenme planıyla.
            </h1>

            <p className="hero__lead">
              Kilo vermek, kan tahlillerinizi düzeltmek ya da sadece daha düzenli beslenmek istiyorsanız
              birlikte gerçekçi bir plan hazırlayalım. Sevdiğiniz yemekleri bırakmanız gerekmiyor.
            </p>

            <div className="hero__actions">
              <button onClick={onOpenAppointment} className="btn btn-primary" style={{ padding: '0.95rem 1.75rem' }}>
                <span>Ücretsiz Ön Görüşme</span>
                <ArrowRight size={18} />
              </button>
              <button onClick={onScrollToTools} className="btn btn-secondary" style={{ padding: '0.95rem 1.5rem' }}>
                <Calculator size={18} color="var(--color-primary-text)" />
                <span>Kalori İhtiyacını Hesapla</span>
              </button>
            </div>

            <ul className="hero__facts">
              <li><Video size={16} /> Online görüşme</li>
              <li><MapPin size={16} /> Kadıköy'de yüz yüze</li>
              <li><Clock size={16} /> Pzt–Cmt 09:00–19:00</li>
            </ul>
          </div>

          <figure className="hero__media">
            <img
              src="./emir-mutfak.jpg"
              alt="Mutfakta sebze doğrayan diyetisyen"
              width={1400}
              height={890}
            />
            <figcaption>
              <strong>{CLINIC_INFO.name}</strong>
              <span>Beslenme ve Diyetetik</span>
            </figcaption>
          </figure>
        </div>

        <div className="hero__stats">
          <div>
            <strong>8 yıl</strong>
            <span>danışmanlık deneyimi</span>
          </div>
          <div>
            <strong>45 dk</strong>
            <span>birebir haftalık görüşme</span>
          </div>
          <div>
            <strong>15 dk</strong>
            <span>ücretsiz ön görüşme</span>
          </div>
        </div>
      </div>
    </section>
  );
};
