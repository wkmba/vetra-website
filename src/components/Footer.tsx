import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image src="/vetra-logo.png" alt="VETRA" width={130} height={36} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className={styles.tagline}>Verify Every Trade.<br />Restore Accountability.</p>
          </div>

          <div className={styles.columns}>
            <div className={styles.col}>
              <h4>Product</h4>
              <Link href="/#how-it-works">How It Works</Link>
              <Link href="/carriers">For Carriers</Link>
              <Link href="/contractors">For Contractors</Link>
            </div>
            <div className={styles.col}>
              <h4>Company</h4>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.col}>
              <h4>Connect</h4>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:hello@vetraverify.com">hello@vetraverify.com</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; {new Date().getFullYear()} VETRA Inc. All rights reserved.</span>
          <span>vetraverify.com</span>
        </div>
      </div>
    </footer>
  );
}
