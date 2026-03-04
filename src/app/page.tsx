import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══════ HERO ═══════ */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Built by a restoration industry veteran
            </div>
            <h1 className={styles.heroTitle}>
              Verify Every Trade.
              <span className={styles.heroTitleAccent}> Restore Accountability.</span>
            </h1>
            <p className={styles.heroDesc}>
              VETRA is the claims integrity platform that insurance carriers add to their
              preferred vendor requirements. Every restoration trade gets video-documented
              and verified — cutting claims leakage without adding carrier cost.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary">Talk to Our Team</Link>
              <Link href="#how-it-works" className="btn btn-outline">See How It Works</Link>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <span className={styles.heroCardTitle}>Active Verification</span>
              <span className={styles.heroCardBadge}>VERIFIED</span>
            </div>
            {[
              { name: 'Water Mitigation — Kitchen', status: '3 videos • Verified', icon: '✓', bg: '#ECFDF5' },
              { name: 'Mold Remediation — Bathroom', status: '2 videos • Pending review', icon: '◷', bg: '#FEF3C7' },
              { name: 'Drywall Replacement — Hallway', status: 'Not started', icon: '▶', bg: '#F1F5F9' },
            ].map((item, i) => (
              <div key={i} className={styles.heroCardRow}>
                <div className={styles.heroCardIcon} style={{ background: item.bg }}>{item.icon}</div>
                <div>
                  <div className={styles.heroCardRowTitle}>{item.name}</div>
                  <div className={styles.heroCardRowSub}>{item.status}</div>
                </div>
              </div>
            ))}
            <div className={styles.heroCardFooter}>
              <span>Claims Integrity Score</span>
              <span className={styles.heroCardScore}>94%</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className={styles.stats}>
        <div className={`container ${styles.statsGrid}`}>
          {[
            ['$1.6B+', 'Annual insurance restoration fraud'],
            ['38%', 'Average claims leakage reduction'],
            ['90 days', 'From mandate to full compliance'],
            ['$0', 'Cost to insurance carriers'],
          ].map(([stat, label], i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statValue}>{stat}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section id="how-it-works" className={`section ${styles.howItWorks}`}>
        <div className="container">
          <div className={styles.sectionCenter}>
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Existing tools document. VETRA verifies.</h2>
          </div>

          <div className={styles.stepsGrid}>
            {[
              {
                step: '01', title: 'Record',
                desc: 'Technicians record each trade using the VETRA app. GPS-stamped, time-verified, tamper-proof video documentation of every step.',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect x="3" y="10" width="30" height="20" rx="3" stroke="#0B7A75" strokeWidth="1.5"/>
                    <circle cx="18" cy="20" r="5" stroke="#0B7A75" strokeWidth="1.5"/>
                    <path d="M13 10l2-4h6l2 4" stroke="#0B7A75" strokeWidth="1.5"/>
                  </svg>
                )
              },
              {
                step: '02', title: 'Verify',
                desc: "VETRA's verification engine confirms work matches the scope, timeline, and standards required by the carrier's compliance framework.",
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M18 3L5 9v8c0 9 5.5 14 13 16.5C25.5 31 31 26 31 17V9L18 3z" stroke="#0B7A75" strokeWidth="1.5" fill="rgba(11,122,117,0.08)"/>
                    <path d="M13 18l4 4 7-7" stroke="#0B7A75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                step: '03', title: 'Protect',
                desc: 'Carriers get verified claims data. Contractors get proof of quality work. Homeowners get peace of mind. Bad actors self-select out.',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <rect x="5" y="20" width="6" height="12" rx="1" fill="rgba(11,122,117,0.3)"/>
                    <rect x="15" y="14" width="6" height="18" rx="1" fill="rgba(11,122,117,0.5)"/>
                    <rect x="25" y="6" width="6" height="26" rx="1" fill="rgba(11,122,117,0.8)"/>
                  </svg>
                )
              },
            ].map(({ step, title, desc, icon }, i) => (
              <div key={i} className="card">
                <div className={styles.stepIcon}>{icon}</div>
                <div className={styles.stepNum}>STEP {step}</div>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FOR CARRIERS PREVIEW ═══════ */}
      <section className={`section ${styles.carriersPreview}`}>
        <div className={`container ${styles.carriersFlex}`}>
          <div className={styles.carriersContent}>
            <span className="section-label">For Insurance Carriers</span>
            <h2 className="section-title">The verification layer your PVL has been missing.</h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Add VETRA to your preferred vendor requirements and gain complete visibility into
              restoration work quality — without adding cost to your operations.
            </p>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <rect x="5" y="20" width="6" height="12" rx="1" fill="rgba(11,122,117,0.3)"/>
                  <rect x="15" y="14" width="6" height="18" rx="1" fill="rgba(11,122,117,0.5)"/>
                  <rect x="25" y="6" width="6" height="26" rx="1" fill="rgba(11,122,117,0.8)"/>
                </svg>
              </div>
              <div>
                <h4>Claims Integrity Analytics</h4>
                <p>Real-time dashboards showing verification rates, compliance scores, and loss prevention metrics.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none">
                  <path d="M18 3L5 9v8c0 9 5.5 14 13 16.5C25.5 31 31 26 31 17V9L18 3z" stroke="#0B7A75" strokeWidth="1.5" fill="rgba(11,122,117,0.08)"/>
                  <path d="M13 18l4 4 7-7" stroke="#0B7A75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4>Zero Carrier Cost</h4>
                <p>Contractors pay the subscription. You get full value at zero operational cost.</p>
              </div>
            </div>

            <Link href="/carriers" className="btn btn-primary" style={{ marginTop: '24px' }}>
              Learn More for Carriers
            </Link>
          </div>

          <div className={styles.xactimateCard}>
            <div className={styles.xactLabel}>The Xactimate Parallel</div>
            <p className={styles.xactDesc}>
              In the early 2000s, Xactimate became the industry standard for estimating because
              carriers mandated it for their vendor networks. VETRA is following the same playbook
              — for verification.
            </p>
            <div className={styles.xactDivider} />
            <div className={styles.xactRow}>
              <span className={styles.xactName}>Xactimate</span>
              <span className={styles.xactRole}>Standardized estimating</span>
            </div>
            <div className={styles.xactRow}>
              <span className={styles.xactNameHighlight}>VETRA</span>
              <span className={styles.xactRole}>Standardizes verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FOUNDER ═══════ */}
      <section className={`section ${styles.founder}`}>
        <div className="container">
          <div className={styles.founderInner}>
            <div className={styles.founderAvatar}>WK</div>
            <span className="section-label">From the Founder</span>
            <h2 className={styles.founderQuote}>
              &ldquo;I built VETRA because I lived the problem.&rdquo;
            </h2>
            <p className={styles.founderDesc}>
              As the owner of a water damage restoration company in the Bay Area, I saw firsthand
              how unverified work, documentation gaps, and bad actors erode trust across the entire
              insurance restoration ecosystem. VETRA exists to fix that — for carriers, for honest
              contractors, and for homeowners.
            </p>
            <p className={styles.founderName}>William Khaziri, Founder &amp; CEO</p>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className={styles.cta}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.ctaTitle}>
            Ready to bring verification to your vendor network?
          </h2>
          <p className={styles.ctaDesc}>
            Join the carriers who are closing the documentation gap and building a more accountable restoration industry.
          </p>
          <Link href="/contact" className="btn btn-white">Talk to Our Team</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
