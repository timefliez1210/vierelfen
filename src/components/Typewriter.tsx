'use client';

import { useState, useEffect } from 'react';
import styles from './Typewriter.module.css';

interface TypewriterProps {
    phrases: string[];
    typingSpeed?: number;
    erasingSpeed?: number;
    pauseAfterTyping?: number;
    pauseAfterErasing?: number;
}

export default function Typewriter({
    phrases,
    typingSpeed = 80,
    erasingSpeed = 45,
    pauseAfterTyping = 2200,
    pauseAfterErasing = 400,
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];

        if (isTyping) {
            if (displayText.length < currentPhrase.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(currentPhrase.slice(0, displayText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => setIsTyping(false), pauseAfterTyping);
                return () => clearTimeout(timeout);
            }
        } else {
            if (displayText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, erasingSpeed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setPhraseIndex((phraseIndex + 1) % phrases.length);
                    setIsTyping(true);
                }, pauseAfterErasing);
                return () => clearTimeout(timeout);
            }
        }
    }, [displayText, isTyping, phraseIndex, phrases, typingSpeed, erasingSpeed, pauseAfterTyping, pauseAfterErasing]);

    return (
        <span className={styles.typewriter}>
            {displayText}
            <span className={styles.cursor} aria-hidden="true">|</span>
        </span>
    );
}
