import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webhook Payload Diff Tracker',
  description: 'Track webhook payload changes across API versions. Monitor schema changes, detect breaking modifications, and maintain version history.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="06ffb0cd-39ee-43d7-b80b-1a28949ce7a5"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
