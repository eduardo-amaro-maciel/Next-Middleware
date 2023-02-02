import { Inter } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
})

import './globals.css'

export default async function RootLayout({ children }) {

    return (
        <html lang="pt-br">
            <head />
            <body>
                {children}
            </body>
        </html>
    )
}
