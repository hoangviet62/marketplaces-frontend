import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Box, Container } from '@mui/material'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { ReactQueryProvider } from '@/lib/react-query'
import { common } from '@mui/material/colors'

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
    fontFamily: 'Avantt-Regular',
    h3: {
      fontFamily: 'Avantt-SemiBold',
      fontSize: 72,
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Avantt-SemiBold',
      fontSize: '4vh',
      fontWeight: 500,
    },
    body2: {
      fontSize: 18,
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {},
    },
  },
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
          <div id="holder">
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
