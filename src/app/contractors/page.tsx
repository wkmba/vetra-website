import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Contractors | VETRA',
  description: 'Record your work. Get verified. Get paid faster. VETRA is the video documentation app your insurance partners require.',
};

export default function ContractorsPage() {
  return (
    <>
      <Navbar />
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(135deg, var(--warm-gray) 0%, #E8F5F3 100%)' }}>
        <div className="container">
          <span className="section-label">For Restoration Contractors</span>
          <h1 className="section-title" style={{ fontSize: '44px', maxWidth: '700px' }}>
            Record your work. Get verified. Stand out.
          </h1>
          <p className="section-desc" style={{ marginBottom: '32px', maxWidth: '600px' }}>
            VETRA is the video documentation app your insurance partners require. Good contractors
            have nothing to hide — and now they can prove it. Verified documentation means faster
            approvals, fewer disputes, and a competitive edge.
          </p>
          <Link href="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            How VETRA works for your team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { step: '01', title: 'Download the App', desc: 'Get the VETRA app on iOS or Android. Create your company account and invite your technicians in minutes.' },
              { step: '02', title: 'Record Each Trade', desc: 'Your technicians record video documentation of each trade as they work. GPS-stamped and time-verified automatically.' },
              { step: '03', title: 'Get Verified', desc: 'VETRA verifies your work matches the scope and standards. Verified jobs flow directly to the carrier for faster approvals.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--deep-teal)', marginBottom: '8px' }}>STEP {item.step}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Why verified contractors win
          </h2>
          {[
            { title: 'Faster Payments', desc: 'Verified documentation means carriers approve claims faster. Less back-and-forth, less waiting.' },
            { title: 'Fewer Disputes', desc: 'Video proof of work eliminates "he said, she said" disputes about scope, quality, and timeline.' },
            { title: 'Competitive Advantage', desc: 'Stand out on preferred vendor lists. Carriers prioritize contractors who embrace accountability.' },
            { title: 'Professional Credibility', desc: 'Every recording builds trust in the industry — and builds your reputation as a quality contractor.' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: '16px', padding: '20px',
              background: 'white', borderRadius: '12px',
              border: '1px solid var(--border)', marginBottom: '16px'
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: 'rgba(11,122,117,0.08)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: 'var(--deep-teal)', fontWeight: 700, fontSize: '14px', flexShrink: 0
              }}>✓</div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '4px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--slate)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--deep-teal)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
            Accountability isn&apos;t surveillance. It&apos;s professionalism.
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--seafoam)', maxWidth: '520px', margin: '0 auto 36px' }}>
            The best contractors in the industry have nothing to hide. VETRA lets you prove it.
          </p>
          <Link href="/contact" className="btn btn-white">Talk to Our Team</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
