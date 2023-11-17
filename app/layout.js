import '@/styles/globals.css'
import AuthProvider from '@components/AuthProvider/AuthProvider'
import Footer from '@components/footer/Footer'

import Nav from '@components/navbar/Nav'
import { ThemeProvider } from '@context/ThemeContext'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asbuilt',
  description: 'Share & Post Your Opinions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Nav/>
            {children}
            <Footer/>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
