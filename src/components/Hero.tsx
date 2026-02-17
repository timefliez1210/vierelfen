import Image from 'next/image';
import Button from './Button';
import Typewriter from './Typewriter';
import styles from './Hero.module.css';

interface HeroProps {
    title: string;
    subtitle?: string;
    subtitlePrefix?: string;
    subtitlePhrases?: string[];
    ctaText?: string;
    ctaHref?: string;
    showCharacters?: boolean;
    backgroundImage?: string;
    imagePosition?: string;
    variant?: 'home' | 'subpage';
}

export default function Hero({
    title,
    subtitle,
    subtitlePrefix,
    subtitlePhrases,
    ctaText,
    ctaHref = '/kontakt',
    showCharacters = true,
    backgroundImage,
    imagePosition = 'center',
    variant = 'home',
}: HeroProps) {
    const isSubpage = variant === 'subpage';

    return (
        <section className={`${styles.hero} ${isSubpage ? styles.subpage : ''}`}>
            {/* Background with wave */}
            <div className={styles.background}>
                {backgroundImage && (
                    <Image
                        src={backgroundImage}
                        alt=""
                        fill
                        priority
                        quality={70}
                        className={styles.backgroundImage}
                        sizes="100vw"
                        style={{ '--image-position': imagePosition } as React.CSSProperties}
                    />
                )}
                {!isSubpage && (
                    <>
                        <div className={styles.waveTop}></div>
                        <div className={styles.waveBottom}></div>
                    </>
                )}
            </div>

            {/* Content */}
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>
                    {subtitlePhrases ? (
                        <>
                            {subtitlePrefix}
                            <Typewriter phrases={subtitlePhrases} />
                        </>
                    ) : (
                        subtitle
                    )}
                </p>
                {ctaText && (
                    <Button href={ctaHref} size="large">
                        {ctaText}
                    </Button>
                )}
            </div>

            {/* Bottom wave transition */}
            {!isSubpage && (
                <div className={styles.waveTransition}>
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                        <path
                            d="M0,60 C150,100 350,0 600,60 C850,120 1050,30 1200,60 C1350,90 1400,60 1440,40 L1440,120 L0,120 Z"
                            fill="var(--color-cream-light)"
                        />
                    </svg>
                </div>
            )}
        </section>
    );
}
