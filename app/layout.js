import './globals.css'
import { Inter } from 'next/font/google'

// font awesome import
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Header 
import Header from '@components/Header'
import Hero from '@components/Hero';
import Footer from '@components/Footer';

// Favorites Context
import { FavoriteContextProvider } from './context/favoriteContext';

// Filter Context
import { FilterContextProvider } from './context/filterContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Darrell React Training',
  description: 'Marvel Comic List',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavoriteContextProvider>
          <FilterContextProvider>
            <Header />
            <Hero />
            {children}
            <Footer />
          </FilterContextProvider>
        </FavoriteContextProvider>
      </body>
    </html>
  )
}
