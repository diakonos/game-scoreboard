import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scoreboard',
  description: 'Keep score like a pro',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="dba2183e-32b7-4fda-832c-653c1ffe1818"></script>
      </head>
      <body>
        <h1 className='text-3xl font-medium text-center mt-5 mb-5'>Scoreboard</h1>
        {children}
        <footer className='text-sm text-center mb-5 mt-5 text-neutral-400'>&copy; {new Date().getFullYear()} Justin Ling. All rights reserved</footer>
      </body>
    </html>
  )
}
