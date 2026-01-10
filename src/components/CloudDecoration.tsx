import styles from './CloudDecoration.module.css';

interface CloudDecorationProps {
    position?: 'top' | 'bottom';
    color?: 'blue' | 'cream';
    flip?: boolean;
}

export default function CloudDecoration({
    position = 'bottom',
    color = 'blue',
    flip = false
}: CloudDecorationProps) {
    return (
        <div
            className={`${styles.cloudContainer} ${styles[position]} ${styles[color]} ${flip ? styles.flip : ''}`}
        >
            <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                className={styles.cloudSvg}
            >
                <path
                    d="M0,64 C120,100 240,120 360,100 C480,80 600,40 720,48 C840,56 960,112 1080,108 C1200,104 1320,40 1380,12 L1440,0 L1440,120 L0,120 Z"
                    fill="currentColor"
                />
            </svg>

            {/* Decorative elements */}
            <div className={styles.decorations}>
                <div className={`${styles.cloud} ${styles.cloud1}`}></div>
                <div className={`${styles.cloud} ${styles.cloud2}`}></div>
                <div className={`${styles.star} ${styles.star1}`}>✨</div>
                <div className={`${styles.star} ${styles.star2}`}>⭐</div>
            </div>
        </div>
    );
}
