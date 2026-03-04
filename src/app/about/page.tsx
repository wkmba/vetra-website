import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About VETRA | Built by a Restoration Industry Veteran',
  description: 'VETRA was built by William Khaziri, a former Bay Area restoration company owner who saw the documentation gap firsthand.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(135deg, var(--warm-gray) 0%, #E8F5F3 100%)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="section-label">Our Story</span>
          <h1 className="section-title" style={{ fontSize: '44px' }}>
            Built by someone who lived the problem.
          </h1>
          <p className="section-desc">
            VETRA wasn&apos;t built by outsiders looking in. It was built from inside the
            restoration industry, by a founder who experienced the documentation gap firsthand.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '48px' }}>
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--deep-teal), var(--light-teal))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: '36px', fontWeight: 700, marginBottom: '20px'
            }}>WK</div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '4px' }}>
              William Khaziri
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--deep-teal)', fontWeight: 600 }}>
              Founder &amp; CEO
            </p>
          </div>

          <div style={{ fontSize: '17px', color: 'var(--slate)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '20px' }}>
              As the owner of a water damage restoration company in the Bay Area, William saw firsthand
              how the insurance restoration industry operates without a verification standard.
              Contractors self-report work completion. Photos are staged. Timestamps are unreliable.
              And insurance carriers pay billions in claims they can&apos;t independently verify.
            </p>
            <p style={{ marginBottom: '20px' }}>
              The honest contractors — the ones doing quality work and following proper protocols — are
              penalized by a system that treats them the same as bad actors. And carriers, unable to
              distinguish between the two, absorb the cost.
            </p>
            <p style={{ marginBottom: '20px' }}>
              VETRA was built to fix this. By creating a video-verified documentation platform that
              carriers mandate for their preferred vendor networks, VETRA brings accountability to
              an industry that has been operating on trust alone.
            </p>
            <p>
              The result: carriers get verified claims data, honest contractors stand out, bad actors
              self-select out of the network, and homeowners get the quality restoration work they
              were promised.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            What drives us
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Accountability', desc: 'Every claim deserves verification. We make the invisible visible.' },
              { title: 'Credibility', desc: 'Built from industry experience, not theory. Grounded in reality.' },
              { title: 'Simplicity', desc: 'Powerful technology that feels effortless for the people using it.' },
              { title: 'Integrity', desc: 'We protect the ecosystem — carriers, contractors, and homeowners together.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--deep-teal)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'var(--deep-teal)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
            Interested in joining our mission?
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--seafoam)', maxWidth: '520px', margin: '0 auto 36px' }}>
            We&apos;re building the verification standard for a $210B industry. Let&apos;s talk.
          </p>
          <Link href="/contact" className="btn btn-white">Get in Touch</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
