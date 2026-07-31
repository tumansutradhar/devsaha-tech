import type { Metadata } from 'next'
import { Archivo, Archivo_Black, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://devsaha.tech'),
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
  authors: [{ name: 'Ranadeb Saha', url: 'https://devsaha.tech' }],
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
    url: 'https://devsaha.tech',
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
    canonical: 'https://devsaha.tech',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark scroll-smooth ${archivo.variable} ${archivoBlack.variable} ${jetbrainsMono.variable}`}
    >
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
