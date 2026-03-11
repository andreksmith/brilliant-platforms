import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://brilliantplatforms.com'
const plausibleDomain = process.env.PLAUSIBLE_DOMAIN

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Brilliant Platforms — Technology for Data Center Infrastructure Procurement',
    template: '%s | Brilliant Platforms',
  },
  description:
    'Brilliant Platforms develops procurement software and media infrastructure for the data center industry.',
  keywords: [
    'data center procurement',
    'infrastructure technology',
    'data center construction',
    'equipment procurement',
    'digital infrastructure',
  ],
  authors: [{ name: 'Brilliant Platforms' }],
  creator: 'Brilliant Platforms',
  publisher: 'Brilliant Platforms',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Brilliant Platforms — Technology for Data Center Infrastructure Procurement',
    description:
      'Brilliant Platforms develops procurement software and media infrastructure for the data center industry.',
    siteName: 'Brilliant Platforms',
    images: [
      {
        url: `${baseUrl}/og-default.svg`,
        width: 1200,
        height: 630,
        alt: 'Brilliant Platforms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brilliant Platforms — Technology for Data Center Infrastructure Procurement',
    description:
      'Brilliant Platforms develops procurement software and media infrastructure for the data center industry.',
    images: [`${baseUrl}/og-default.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
