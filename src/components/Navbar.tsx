'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image src="/vetra-logo.png" alt="VETRA" width={160} height={44} priority style={{ objectFit: 'contain' }} />
        </Link>

        <div className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}>
          <Link href="/#how-it-works" onClick={() => setMobileOpen(false)}>How It Works</Link>
          <Link href="/carriers" onClick={() => setMobileOpen(false)}>For Carriers</Link>
          <Link href="/contractors" onClick={() => setMobileOpen(false)}>For Contractors</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
            Talk to Our Team
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>
    </nav>
  );
}
