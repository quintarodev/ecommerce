import type { Metadata } from 'next'

import './globals.css'

// Supports weights 300-900

import '@fontsource-variable/rubik'

export const metadata: Metadata = {
  title: 'Ecommerce Basic',

  description: 'The best products in to Santa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={` antialiased`}>{children}</body>
    </html>
  )
}
