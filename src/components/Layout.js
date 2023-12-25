import React from 'react';

import { Inter as FontSans } from "next/font/google"
import { Playfair_Display as FontSerif } from 'next/font/google';

import { cn } from '@/lib/utils';
import Header from './Header';
import Footer from './Footer';
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
})

const Layout = ({ children }) => (
    <body className={cn( "min-h-screen bg-background font-sans antialiased flex flex-col", fontSans.variable, fontSerif.variable)}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
    </body>
);

export default Layout;