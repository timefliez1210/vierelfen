import Hero from '@/components/Hero';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Vier Elfen Kinderlounge"
        subtitle="Deine Location für Spiel und Spaß in Hildesheim"
        ctaText="Jetzt anfragen"
        ctaHref="/kontakt"
      />

      {/* Introduction Section */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <h2>Willkommen in der Vier Elfen Kinderlounge</h2>
            <p>
              Wir sind deine Location in Hildesheim, spezialisiert auf die Ausrichtung von
              Kindergeburtstagen, Babypartys, Taufen und allen anderen Feiern, die Kinder
              im Mittelpunkt haben. Spar dir Stress und Zeit – Feiere deine nächste Party
              in unserer Kinderlounge Vier Elfen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {/* Unser Angebot */}
            <div className={styles.serviceCard}>
              <h3>Unser Angebot</h3>
              <ul>
                <li>🎂 Geburtstage</li>
                <li>🎈 Babypartys</li>
                <li>💒 Taufen</li>
                <li>🎮 Spieleparadies</li>
                <li>✨ Und vieles mehr: was Kinderherzen höher schlagen lässt</li>
              </ul>
            </div>

            {/* Unser Service */}
            <div className={styles.serviceCard}>
              <h3>Unser Service</h3>
              <ul>
                <li>📝 Einfache Anfrage</li>
                <li>🎈 Dekoration mit max. 100 Ballons inklusive</li>
                <li>🥤 Essen und Trinken</li>
                <li>🎨 Aktivitäten und Spiele für Kinder</li>
                <li>⭐ Zusätzliche Optionen für individuelle Feiern</li>
              </ul>
            </div>
          </div>

          <div className={styles.ctaWrapper}>
            <Link href="/kontakt" className={styles.cta}>
              Jetzt anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyUs}>
        <div className={styles.waveTop}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              d="M0,60 C150,100 350,0 600,60 C850,120 1050,30 1200,60 C1350,90 1400,60 1440,40 L1440,0 L0,0 Z"
              fill="var(--color-cream-light)"
            />
          </svg>
        </div>

        <div className={styles.container}>
          <div className={styles.whyUsContent}>
            <h2>Bei Vier Elfen feiert ihr mit Erlebnis</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🏠</span>
                <h4>Exklusive Nutzung</h4>
                <p>Unser gesamter Raum gehört nur euch – ohne andere Gäste</p>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🎨</span>
                <h4>Motto-Feiern</h4>
                <p>Wählt aus verschiedenen Themen für eure perfekte Party</p>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>😊</span>
                <h4>Stressfrei</h4>
                <p>Wir kümmern uns um die Deko – ihr genießt die Feier</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.waveBottom}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              d="M0,60 C150,100 350,0 600,60 C850,120 1050,30 1200,60 C1350,90 1400,60 1440,40 L1440,120 L0,120 Z"
              fill="var(--color-cream-light)"
            />
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <h2>Bereit für die perfekte Kinderparty?</h2>
          <p>Kontaktiert uns noch heute und lasst uns gemeinsam eine unvergessliche Feier planen!</p>
          <Link href="/kontakt" className={styles.ctaLarge}>
            Jetzt Termin anfragen 🎉
          </Link>
        </div>
      </section>
    </>
  );
}
