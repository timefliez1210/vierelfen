import Hero from '@/components/Hero';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Vier Elfen Kinderlounge"
        subtitlePrefix="Deine Location für "
        subtitlePhrases={[
          'Spiel und Spaß',
          'Kindergeburtstage',
          'Babypartys',
          'Taufen',
          'unvergessliche Feiern',
        ]}
        ctaText="Jetzt anfragen"
        ctaHref="/kontakt"
        backgroundImage="/images/gallery-venue.jpg"
        imagePosition="top left"
      />

      {/* Introduction Section */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <h2 className={styles.introHeading}>Willkommen in der Vier Elfen Kinderlounge</h2>
          <div className={styles.introImage}>
            <Image
              src="/images/gallery-unicorn.jpg"
              alt="Einhorn Party Setup im Freien"
              fill
              quality={70}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className={styles.introText}>
            Wir sind deine Location in Hildesheim, spezialisiert auf die Ausrichtung von
            Kindergeburtstagen, Babypartys, Taufen und allen anderen Feiern, die Kinder
            im Mittelpunkt haben. Spar dir Stress und Zeit – Feiere deine nächste Party
            in unserer Kinderlounge Vier Elfen.
          </p>
        </div>
      </section>

      {/* Services Section - Angebot with Image */}
      <section className={styles.serviceBlock}>
        <div className={styles.container}>
          <div className={styles.serviceRow}>
            <div className={styles.serviceImage}>
              <Image
                src="/images/gallery-mermaid.jpg"
                alt="Meerjungfrau Motto-Party mit Ballondekoration"
                fill
                quality={70}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.serviceContent}>
              <h2>Unser Angebot</h2>
              <ul>
                <li>🎂 Geburtstage</li>
                <li>🎈 Babypartys</li>
                <li>💒 Taufen</li>
                <li>🧸 Spielparadies für die Kleinen</li>
                <li>✨ Und vieles mehr: was Kinderherzen höher schlagen lässt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services - 3 Cards */}
      <section className={styles.additionalServices}>
        <div className={styles.container}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🎨</span>
              <h3>Dekoration auswärts</h3>
              <p>Wir dekorieren auch bei euch zu Hause oder an eurem Wunschort</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🎭</span>
              <h3>Animateure</h3>
              <p>Professionelle Animateure können nach Absprache gebucht werden</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🚗</span>
              <h3>Kostenlose Parkplätze</h3>
              <p>Ausreichend Parkmöglichkeiten direkt vor der Haustür auf öffentlicher Straße</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Service with Image (reversed) */}
      <section className={styles.serviceBlock}>
        <div className={styles.container}>
          <div className={`${styles.serviceRow} ${styles.reversed}`}>
            <div className={styles.serviceImage}>
              <Image
                src="/images/venue-slide.jpg"
                alt="Spielbereich mit Rutsche"
                fill
                quality={70}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.serviceContent}>
              <h2>Unser Service</h2>
              <ul>
                <li>📝 Einfache Anfrage</li>
                <li>🎈 Dekoration mit max. 100 Ballons inklusive</li>
                <li>🎨 Aktivitäten und Spiele für Kinder</li>
                <li>Zusätzliche Optionen für individuelle Feiern</li>
              </ul>
              <Button href="/kontakt">
                Jetzt anfragen
              </Button>
            </div>
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
                <h3>Exklusive Nutzung</h3>
                <p>Unser gesamter Raum gehört nur euch – ohne andere Gäste</p>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🎨</span>
                <h3>Motto-Feiern</h3>
                <p>Wählt aus verschiedenen Themen für eure perfekte Party</p>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>😊</span>
                <h3>Stressfrei</h3>
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
          <Button href="/kontakt" size="large">
            Jetzt Termin anfragen
          </Button>
        </div>
      </section>
    </>
  );
}
