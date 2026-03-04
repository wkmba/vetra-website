import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Insurance Carriers | VETRA',
  description: 'Add VETRA to your preferred vendor list. Gain verified claims data and reduce leakage at zero cost to your operations.',
};

export default function CarriersPage() {
  return (
    <>
      <Navbar />
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(135deg, var(--warm-gray) 0%, #E8F5F3 100%)' }}>
        <div className="container">
          <span className="section-label">For Insurance Carriers</span>
          <h1 className="section-title" style={{ fontSize: '44px', maxWidth: '700px' }}>
            Verified claims data. Zero cost to you.
          </h1>
          <p className="section-desc" style={{ marginBottom: '32px', maxWidth: '600px' }}>
            VETRA integrates into your preferred vendor list as a compliance requirement. Contractors
            pay the subscription. You get complete visibility into restoration work quality across your
            entire vendor network.
          </p>
          <Link href="/contact" className="btn btn-primary">Schedule a Demo</Link>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            Why carriers choose VETRA
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Claims Integrity Analytics', desc: 'Real-time dashboards with verification rates, compliance scores, and loss prevention metrics across your vendor network.' },
              { title: 'Zero Implementation Cost', desc: 'Contractors pay the subscription. No integration fees, no per-claim charges, no IT overhead for your team.' },
              { title: 'Retrospective Validation', desc: 'We analyze your historical claims data to quantify leakage — proving ROI before you commit to a mandate.' },
              { title: 'Self-Selection Effect', desc: 'Bad actors voluntarily exit your vendor network rather than submit to verification. The mandate filters them out.' },
              { title: 'Compliance Framework', desc: 'Standardized video documentation requirements that integrate with your existing PVL and claims workflows.' },
              { title: 'Adjuster Portal', desc: 'Your adjusters get a dedicated portal to review verified documentation, speeding up claims resolution.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-navy)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span style={{ color: 'var(--seafoam)', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Xactimate Parallel</span>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'white', margin: '16px 0 20px' }}>
            Xactimate standardized estimating.<br />Nothing standardized verification. Until now.
          </h2>
          <p style={{ fontSize: '16px', color: '#CBD5E1', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 36px' }}>
            In the early 2000s, carriers mandated Xactimate for their vendor networks and it became the
            industry standard for estimating. VETRA is following the same playbook — for verification.
            The carrier mandate is the forcing function that drives adoption.
          </p>
          <Link href="/contact" className="btn btn-white">Talk to Our Team</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
