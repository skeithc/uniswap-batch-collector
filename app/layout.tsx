import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Web3ContextProvider from '../contexts/Web3Context';
import ThemeContextProvider from '../contexts/ThemeContext';
import AppHeader from '../components/AppHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeContextProvider>
            <Web3ContextProvider>
                <AppHeader/>
                {children}
            </Web3ContextProvider>
          </ThemeContextProvider>
      </body>
    </html>
  );
}
