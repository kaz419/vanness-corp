'use client';

import { useRef, useState } from 'react';

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    href?: string;
}

export function GlowCard({ children, className = '', style = {}, href }: GlowCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [glowPos, setGlowPos] = useState({ x: 0, y: 0, opacity: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        setGlowPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            opacity: 1,
        });
    };

    const handleMouseLeave = () => {
        setGlowPos((prev) => ({ ...prev, opacity: 0 }));
    };

    const Tag = href ? 'a' : 'div';

    return (
        <Tag
            href={href}
            ref={cardRef as React.Ref<HTMLDivElement & HTMLAnchorElement>}
            className={`card ${className}`}
            style={{ ...style, position: 'relative', textDecoration: 'none', display: 'block' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    pointerEvents: 'none',
                    background: `radial-gradient(300px circle at ${glowPos.x}px ${glowPos.y}px, rgba(6, 182, 212, 0.12), transparent 60%)`,
                    opacity: glowPos.opacity,
                    transition: 'opacity 0.3s ease',
                    zIndex: 1,
                }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </div>
        </Tag>
    );
}
