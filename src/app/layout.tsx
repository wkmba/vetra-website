import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VETRA | Verify Every Trade. Restore Accountability.',
  description: 'VETRA is the claims integrity platform for insurance restoration. Carriers mandate video-verified documentation, cutting claims leakage without adding cost.',
  keywords: ['insurance restoration', 'claims integrity', 'verification', 'InsurTech', 'compliance', 'VETRA'],
  authors: [{ name: 'VETRA Inc.' }],
  openGraph: {
    title: 'VETRA | Verify Every Trade. Restore Accountability.',
    description: 'The claims integrity platform that insurance carriers mandate for their preferred vendor networks.',
    url: 'https://vetraverify.com',
    siteName: 'VETRA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VETRA | Verify Every Trade. Restore Accountability.',
    description: 'The claims integrity platform for insurance restoration.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
