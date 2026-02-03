import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    href: string;
    size?: 'default' | 'large';
    variant?: 'primary' | 'secondary';
    className?: string;
}

export default function Button({
    children,
    href,
    size = 'default',
    variant = 'primary',
    className = '',
}: ButtonProps) {
    const classes = [
        styles.button,
        styles[size],
        styles[variant],
        className,
    ].filter(Boolean).join(' ');

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
}
