import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthSessionProvider from './providers/sessionProvider'
import './globals.css'
import AppBar from './appbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Time_Lab 2024',
  description: 'Unfolding events that happened in time',
}

export default function RootLayout({
  children, session
}: {
  children: React.ReactNode
  session: any
}) {
  return (
    <html lang="en" className="sm:scroll-smooth">
      <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <NextAuthSessionProvider session={session}>
        <header className="text-white sticky-top-0 z-10 p-2"> 
        <AppBar/>
        </header>
          {children}
          <footer id='footer' className="bg-teal-700 text-white text-xl">
            <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
              <address>
                <h2>ACMe rockect powered products, inc.</h2>
                555 astro way <br />
                far-field New Jersey 12345-55555 <br />
                Email: <a href="mailto:turigaituri@gmail.com">timelabs@gmail.com</a><br />
                555 astro way <br />
              </address>
              <nav className="hidden md:flex flex-col gap-2" aria-label='footer'>
                <a href="#rockets" className="hover:opacity-90">Our Rockets</a>
                <a href="#testimonials" className="hover:opacity-90">Testimonials</a>
                <a href="#contact" className="hover:opacity-90">contact Us</a>
              </nav>
              <div className="flex flex-col sm:gap-2">
                <p className="text-right">Copyright &copy; <span id="year">2024</span></p>
                <p className="text-right">All Rights Reserved</p>
              </div>
            </section>
          </footer> 
          <div className="circle1"></div>
          <div className="circle2"></div>
        </NextAuthSessionProvider>
        
      </body>
    </html>
  )
}
