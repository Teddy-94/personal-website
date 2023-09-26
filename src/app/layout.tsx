import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teodor Adolfsson',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-100 p-4 min-h-screen">
          <div className="bg-white p-8 rounded-lg min-h-[95vh] shadow-lg shadow-red-900">
            <Topbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
