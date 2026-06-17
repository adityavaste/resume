import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'DevOps & Cloud Engineer Portfolio',
  description: 'AWS Cloud Engineer specializing in Kubernetes, Terraform, CI/CD, and scalable cloud architecture. View my projects and experience.',
  keywords: ['DevOps', 'Cloud Engineer', 'AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Platform Engineer'],
  authors: [{ name: 'Cloud Engineer' }],
  openGraph: {
    title: 'DevOps & Cloud Engineer Portfolio',
    description: 'AWS Cloud Engineer specializing in Kubernetes, Terraform, CI/CD, and scalable cloud architecture.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps & Cloud Engineer Portfolio',
    description: 'AWS Cloud Engineer specializing in Kubernetes, Terraform, CI/CD, and scalable cloud architecture.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
