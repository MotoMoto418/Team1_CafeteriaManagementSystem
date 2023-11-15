import { Montserrat } from 'next/font/google'
import './globals.css'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'DishDash',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  )
}
