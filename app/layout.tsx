import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalStyles } from "./components";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Liezah',
  description: 'Go out with me Liezah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><GlobalStyles />{children}</body>
    </html>
  )
}
