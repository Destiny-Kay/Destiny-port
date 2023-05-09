import Navbar from '@/components/Navbar'
import Socials from '@/components/Socials'
import Footer from '@/components/Footer'
import './globals.css'
import { El_Messiri } from 'next/font/google'

const elMessiri = El_Messiri(
    {
      subsets:["latin"],
      weight:["400", "700"]
    }
)

export const metadata = {
  title: 'DestinyKay',
  description: 'Destiny\'s personal web portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={elMessiri.className}>
        <Navbar />
        {children}
        <Socials />
        <Footer />
      </body>
    </html>
  )
}
