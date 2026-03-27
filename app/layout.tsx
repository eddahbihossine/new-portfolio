import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { PageTransitions } from '@/components/page-transitions'
import { MagneticCursor } from '@/components/MagneticCursor'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const epicSerif = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-epic" })

export const metadata: Metadata = {
  title: 'El Houssaine Eddahbi | DevOps & Cloud Engineer',
  description: 'Portfolio of El Houssaine Eddahbi - DevOps & Cloud Engineer based in Lyon, specialized in automation, Python development, and operational solutions integration.',
  generator: 'Houssaine',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${epicSerif.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          enableColorScheme
          disableTransitionOnChange
        >
          <LanguageProvider>
            <MagneticCursor />
            <PageTransitions>{children}</PageTransitions>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
