export const metadata = {
  title: 'Pinnacl Properties',
  description: 'Premium real-estate & property consulting'
}

import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
