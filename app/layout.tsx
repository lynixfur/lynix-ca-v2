import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar'

export const metadata: Metadata = {
  title: 'LynixCA',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
