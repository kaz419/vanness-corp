"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header style={{
            padding: "1rem 0",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 100,
            background: "rgba(2, 6, 23, 0.8)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(255,255,255,0.05)"
        }}>
            <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link href="/" style={{
                    zIndex: 1000,
                    position: "relative",
                    display: "flex",
                    alignItems: "center"
                }} onClick={() => setIsOpen(false)}>
                    <Image
                        src="/logo.png"
                        alt="VanNess"
                        width={120}
                        height={40}
                        style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)" }}
                        priority
                    />
                </Link>

                {/* Hamburger Button */}
                <button
                    className="hamburger-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
                </button>

                {/* Navigation */}
                <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    {["Service", "Works", "Recruitment", "Company"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase() === 'recruitment' ? 'careers' : item.toLowerCase() === 'service' ? 'services' : item.toLowerCase()}`}
                            className="nav-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="/#contact"
                        className="btn btn-primary nav-btn"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
