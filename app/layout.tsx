import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thouraya Jamai | Data Scientist & AI Engineer',
  description:
    'Data Scientist and AI Engineer specializing in Machine Learning, Deep Learning, NLP, Computer Vision, and Information Retrieval. Explore projects, experience, certifications, and AI solutions developed by Thouraya Jamai.',
  generator: 'v0.app',
  keywords: [
    'Thouraya Jamai',
    'Data Scientist',
    'AI Engineer',
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Computer Vision',
    'Information Retrieval',
  ],
  authors: [{ name: 'Thouraya Jamai' }],
  openGraph: {
    title: 'Thouraya Jamai | Data Scientist & AI Engineer',
    description:
      'Data Scientist and AI Engineer specializing in Machine Learning, Deep Learning, NLP, Computer Vision, and Information Retrieval.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F6F2' },
    { media: '(prefers-color-scheme: dark)', color: '#1E1B18' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
