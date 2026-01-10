import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaHref?: string;
    showCharacters?: boolean;
}

export default function Hero({
    title,
    subtitle,
    ctaText = 'Jetzt anfragen',
    ctaHref = '/kontakt',
    showCharacters = true,
}: HeroProps) {
    return (
        <section className={styles.hero}>
            {/* Background with wave */}
            <div className={styles.background}>
                <div className={styles.waveTop}></div>
                <div className={styles.waveBottom}></div>

                {/* Floating decorations */}
                {showCharacters && (
                    <div className={styles.decorations}>
                        <div className={`${styles.balloon} ${styles.balloon1}`}>🎈</div>
                        <div className={`${styles.balloon} ${styles.balloon2}`}>🎈</div>
                        <div className={`${styles.star} ${styles.star1}`}>✨</div>
                        <div className={`${styles.star} ${styles.star2}`}>⭐</div>
                        <div className={`${styles.confetti} ${styles.confetti1}`}>🎉</div>
                        <div className={`${styles.heart} ${styles.heart1}`}>❤️</div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                {ctaText && (
                    <Link href={ctaHref} className={styles.cta}>
                        {ctaText}
                    </Link>
                )}
            </div>

            {/* Bottom wave transition */}
            <div className={styles.waveTransition}>
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path
                        d="M0,60 C150,100 350,0 600,60 C850,120 1050,30 1200,60 C1350,90 1400,60 1440,40 L1440,120 L0,120 Z"
                        fill="var(--color-cream-light)"
                    />
                </svg>
            </div>
        </section>
    );
}
