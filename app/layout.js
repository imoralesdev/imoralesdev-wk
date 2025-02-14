import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ASVAB Vocabulary Quiz',
  description: 'Practice your ASVAB vocabulary with this interactive quiz',
  manifest: '/manifest.json',
  themeColor: '#3b82f6',
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ASVAB Guide" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Tailwind CSS via CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Configure Tailwind */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: '#3b82f6',
                  }
                }
              }
            }
          `
        }} />
        <style dangerouslySetInnerHTML={{
            __html: `
              .formula-container {
                position: relative;
                margin: 1rem 0;
              }

              .formula-container pre {
                font-family: 'Courier New', Courier, monospace;
                line-height: 1.5;
                padding: 1rem;
                margin: 0;
                background-color: #f8fafc;
                border-radius: 0.5rem;
                overflow-x: auto;
                white-space: pre-wrap;
              }

              .formula-container pre::-webkit-scrollbar {
                height: 4px;
              }

              .formula-container pre::-webkit-scrollbar-track {
                background: #f1f1f1;
              }

              .formula-container pre::-webkit-scrollbar-thumb {
                background: #888;
                border-radius: 2px;
              }

              .formula-symbol {
                font-weight: bold;
                color: #4a5568;
              }

              .formula-divider {
                border-top: 1px solid #e2e8f0;
                margin: 0.5rem 0;
              }

              .formula-box {
                border: 1px solid #e2e8f0;
                padding: 1rem;
                margin: 0.5rem 0;
                border-radius: 0.5rem;
                background-color: #f8fafc;
              }

              .formula-equation {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5rem;
                font-family: 'Courier New', Courier, monospace;
              }

              /* For proper alignment of mathematical operations */
              .formula-operator {
                margin: 0 0.5rem;
                font-weight: bold;
              }

              /* For division and fractions */
              .fraction {
                display: inline-block;
                text-align: center;
                vertical-align: middle;
                margin: 0 0.2rem;
              }
              
              .fraction > span {
                display: block;
                padding: 0.1rem;
              }
              
              .fraction span.divider {
                border-top: thin solid;
              }

              /* For unit conversions */
              .conversion-arrow {
                color: #4a5568;
                margin: 0 0.5rem;
              }

              /* Example boxes */
              .example-box {
                background-color: #f8fafc;
                border-left: 4px solid #3b82f6;
                padding: 1rem;
                margin: 1rem 0;
                border-radius: 0 0.5rem 0.5rem 0;
              }
            `
          }} />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>

        {/* Service Worker Registration */}
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}