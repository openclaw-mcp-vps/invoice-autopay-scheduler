import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Invoice AutoPay Scheduler — Optimize Cash Flow Automatically',
  description: 'Auto-schedule invoice payments on optimal dates based on cash flow, payment terms, and early payment discounts. Save money and reduce late fees.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8c105dd6-8fc2-40ea-8883-1d1396701b6f"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
