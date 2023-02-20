import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { ReactQueryProvider } from '@/lib/react-query'
import localFont from '@next/font/local'

const roboto = localFont({
  src: [
    {
      path: '../public/fonts/Roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roboto/Roboto-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Roboto/Roboto-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#026928',
      dark: '#597226',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    }
  },
  typography: {
    h3: {
      fontSize: '9vh',
      fontWeight: 'bold',
      letterSpacing: 0,
    },
    h4: {
      fontSize: '7vh',
      fontWeight: 'bold',
      letterSpacing: 0,
    },
    h5: {
      fontSize: '3vh',
      fontWeight: 'bold',
      letterSpacing: 0,
    },
    body2: {
      fontSize: '1.7vh',
      fontWeight: 400,
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {}
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>{process.env.appName}</title>
      </Head>
      <ReactQueryProvider>
        <ThemeProvider theme={theme}>
          <div id="holder" className={roboto.className}>
            <Header />
            <div id="body">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </ReactQueryProvider>
    </>
  )
}

export default MyApp
