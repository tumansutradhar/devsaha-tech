import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://devsahatech.com'),
  title: {
    default: 'DevSaha Tech — Full Stack Web Development & Backend Engineering',
    template: '%s | DevSaha Tech',
  },
  description:
    'DevSaha Tech is a software agency based in Katwa, West Bengal, India. We build high-performance full-stack web apps, REST & GraphQL APIs, and scalable database architectures using Python, Django, Node.js, Next.js, and PostgreSQL.',
  keywords: [
    'software development agency India',
    'full stack web development',
    'Django REST API',
    'Node.js backend development',
    'Next.js web app',
    'PostgreSQL optimization',
    'web development Katwa',
    'West Bengal software company',
    'DevSaha Tech',
    'Ranadeb Saha developer',
    'hire web developer India',
    'custom software development',
    'React developer India',
    'scalable API development',
    'mobile app development India',
  ],
  authors: [{ name: 'Ranadeb Saha', url: 'https://devsahatech.com' }],
  creator: 'DevSaha Tech',
  publisher: 'DevSaha Tech',
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://devsahatech.com',
    siteName: 'DevSaha Tech',
    title: 'DevSaha Tech — Full Stack Web Development & Backend Engineering',
    description:
      'We build high-performance web apps, REST APIs, and scalable backends. Based in West Bengal, India. Trusted by startups and businesses across India.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevSaha Tech — Full Stack Web Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevSaha Tech — Full Stack Web Development & Backend Engineering',
    description:
      'High-performance web apps, REST APIs, and scalable backends. Based in West Bengal, India.',
    images: ['/og-image.png'],
    creator: '@devsahatech',
  },
  alternates: {
    canonical: 'https://devsahatech.com',
  },
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
