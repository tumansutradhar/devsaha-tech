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
    default: 'DevSaha Tech — Best Website Development Company in Bardhaman, Katwa & West Bengal',
    template: '%s | DevSaha Tech',
  },
  description:
    'DevSaha Tech is a premier software and full stack web development company based in Katwa, Bardhaman, West Bengal. We build high-performance web apps, budget websites, REST & GraphQL APIs, and scalable backends.',
  keywords: [
    'DevSaha Tech',
    'dev saha tech',
    'website development company',
    'full stack development company',
    'budget website dev company',
    'best website dev company in bardhaman',
    'best website dev company in katwa',
    'best website dev company in west bengal',
    'software development agency India',
    'web development Katwa',
    'West Bengal software company',
    'hire web developer India',
    'React developer India',
    'custom software development',
  ],
  authors: [{ name: 'Ranadeb Saha', url: 'https://devsaha.tech' }],
  category: 'technology',
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
        url: '/opengraph-image',
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
    images: ['/opengraph-image'],
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
  manifest: '/manifest.json',
  verification: {
    google: 'f2R3gwFs8Uzia-A8yOG-xnr1ddQUjauh5EBWfRh-KRs',
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
      data-scroll-behavior="smooth"
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
