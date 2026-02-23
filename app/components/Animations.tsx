'use client';

import { useEffect, useRef, useState } from 'react';

type AnimationDirection = 'up' | 'left' | 'right' | 'scale';

interface ScrollFadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: AnimationDirection;
}

const directionStyles: Record<AnimationDirection, { initial: React.CSSProperties; visible: React.CSSProperties }> = {
    up: {
        initial: { opacity: 0, transform: 'translateY(30px)' },
        visible: { opacity: 1, transform: 'translateY(0)' },
    },
    left: {
        initial: { opacity: 0, transform: 'translateX(-60px)' },
        visible: { opacity: 1, transform: 'translateX(0)' },
    },
    right: {
        initial: { opacity: 0, transform: 'translateX(60px)' },
        visible: { opacity: 1, transform: 'translateX(0)' },
    },
    scale: {
        initial: { opacity: 0, transform: 'scale(0.85)' },
        visible: { opacity: 1, transform: 'scale(1)' },
    },
};

export function ScrollFadeIn({ children, delay = 0, className = '', direction = 'up' }: ScrollFadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            { threshold: 0.1 }
        );

        if (el) {
            observer.observe(el);
        }

        return () => {
            if (el) {
                observer.unobserve(el);
            }
        };
    }, [delay]);

    const styles = directionStyles[direction];

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...(isVisible ? styles.visible : styles.initial),
                transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    );
}

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    decimals?: number;
    className?: string;
}

export function CountUp({ end, duration = 2000, suffix = '', decimals = 0, className = '' }: CountUpProps) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    const startTime = Date.now();
                    const endTime = startTime + duration;

                    const updateCount = () => {
                        const now = Date.now();
                        const progress = Math.min((now - startTime) / duration, 1);
                        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
                        const currentCount = easeOutQuad * end;

                        setCount(currentCount);

                        if (now < endTime) {
                            requestAnimationFrame(updateCount);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(updateCount);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [end, duration, hasStarted]);

    return (
        <span ref={ref} className={className}>
            {count.toFixed(decimals)}{suffix}
        </span>
    );
}
