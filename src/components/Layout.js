import { ThemeProvider } from "@/components/theme-provider"

import { Inter } from "next/font/google"

import Header from './Header';
import Footer from './Footer';

const fontSans = Inter({
    subsets: ["latin"],
})


const Layout = ({ children }) => (
    // <ThemeProvider
    //     attribute="class"
    //     defaultTheme="system"
    //     enableSystem
    //     disableTransitionOnChange
    // >
        <body className={`min-h-screen dark bg-background antialiased flex flex-col ${fontSans.className}`}>

            <Header />
            <main className={`flex-grow`}>{children}</main>
            <Footer />
        </body>
    // </ThemeProvider>

);

export default Layout;