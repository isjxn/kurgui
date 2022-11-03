import '../styles/globals.css'
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { KurNavbar } from '../components/KurNavbar';

const lightTheme = createTheme({
  type: 'light',
  theme: {}
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {}
});

export default function KurApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
    >
      <NextUIProvider>
        <KurNavbar />
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}
