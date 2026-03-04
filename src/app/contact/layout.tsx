import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | VETRA',
  description: 'Get in touch with the VETRA team. Whether you are a carrier, contractor, or investor — we would love to hear from you.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
