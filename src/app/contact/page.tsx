'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <section style={{ paddingTop: '140px', paddingBottom: '80px', background: 'linear-gradient(135deg, var(--warm-gray) 0%, #E8F5F3 100%)', minHeight: '100vh' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <span className="section-label">Contact</span>
          <h1 className="section-title" style={{ fontSize: '40px', marginBottom: '12px' }}>
            Talk to our team
          </h1>
          <p className="section-desc" style={{ marginBottom: '40px' }}>
            Whether you&apos;re a carrier exploring verification for your vendor network, a contractor
            with questions, or an investor interested in VETRA — we&apos;d love to hear from you.
          </p>

          {submitted ? (
            <div style={{
              background: 'white', borderRadius: '16px', padding: '48px',
              textAlign: 'center', border: '1px solid var(--border)',
              boxShadow: '0 4px 20px rgba(15,40,48,0.06)'
            }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: '#ECFDF5', display: 'flex', alignItems: 'center',
                justifyContent: 'center', margin: '0 auto 20px',
                fontSize: '24px', color: '#059669'
              }}>✓</div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '12px' }}>
                Message received
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--slate)', lineHeight: 1.6 }}>
                Thanks for reaching out. We&apos;ll get back to you within one business day.
              </p>
            </div>
          ) : (
            <div style={{
              background: 'white', borderRadius: '16px', padding: '36px',
              border: '1px solid var(--border)',
              boxShadow: '0 4px 20px rgba(15,40,48,0.06)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={labelStyle}>First name</label>
                  <input type="text" placeholder="William" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Last name</label>
                  <input type="text" placeholder="Khaziri" style={inputStyle} />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Email</label>
                <input type="email" placeholder="you@company.com" style={inputStyle} />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Company</label>
                <input type="text" placeholder="Your company name" style={inputStyle} />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>I am a...</label>
                <select style={{ ...inputStyle, cursor: 'pointer' }} defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option value="carrier">Insurance Carrier</option>
                  <option value="contractor">Restoration Contractor</option>
                  <option value="adjuster">Adjuster / TPA / MGA</option>
                  <option value="investor">Investor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  placeholder="Tell us how we can help..."
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                />
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => setSubmitted(true)}
              >
                Send Message
              </button>

              <p style={{ fontSize: '13px', color: 'var(--mid-gray)', textAlign: 'center', marginTop: '16px' }}>
                Or email us directly at <a href="mailto:hello@vetraverify.com" style={{ color: 'var(--deep-teal)' }}>hello@vetraverify.com</a>
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '14px',
  fontWeight: 600,
  color: '#0F2830',
  marginBottom: '6px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  border: '1px solid #E2E8F0',
  fontSize: '15px',
  fontFamily: 'inherit',
  color: '#334155',
  background: '#F8FAFC',
  outline: 'none',
  transition: 'border-color 0.2s',
};
