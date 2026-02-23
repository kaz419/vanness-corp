'use client';

import { useEffect, useState } from 'react';

interface TypeWriterProps {
    texts: string[];
    speed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

export function TypeWriter({
    texts,
    speed = 80,
    deleteSpeed = 40,
    pauseDuration = 2000,
    className = '',
}: TypeWriterProps) {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deleteSpeed : speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pauseDuration]);

    return (
        <span className={className}>
            {displayText}
            <span
                style={{
                    borderRight: '3px solid var(--cyan)',
                    animation: 'blink 1s step-end infinite',
                    marginLeft: '2px',
                }}
            />
        </span>
    );
}
