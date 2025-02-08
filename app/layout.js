import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'ASVAB Vocabulary Quiz',
    description: 'Practice your ASVAB vocabulary with this interactive quiz',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
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
        </head>
        <body>
          <div className="min-h-screen bg-white">
            {children}
          </div>
        </body>
      </html>
    )
  }