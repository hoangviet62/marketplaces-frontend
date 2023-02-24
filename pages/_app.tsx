import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { ReactQueryProvider } from '@/lib/react-query'
import ProtectedRoute from '@/hoc/protected-route'
import localFont from '@next/font/local'
import Toast from '@/components/Toast'
import 'react-toastify/dist/ReactToastify.css'
import { LoadingContext } from '@/context/loading'
import { useState } from 'react'
import Loading from '@/components/Loading'
import ModalProvider from '@/providers/modal'

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
    },
  },
  typography: {
    h3: {
      fontSize: 72,
      fontWeight: 700,
    },
    h4: {
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
  const [loading, setLoading] = useState<boolean>(false)

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
          <ModalProvider>
            <LoadingContext.Provider
              value={{
                loading: loading,
                setLoading: setLoading,
              }}
            >
              <div id="holder" className={roboto.className}>
                <Header />
                <div id="body">
                  <ProtectedRoute>
                    <Component {...pageProps} />
                    {loading && <Loading />}
                  </ProtectedRoute>
                  <Toast />
                </div>
                <Footer />
              </div>
            </LoadingContext.Provider>
          </ModalProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </>
  )
}

export default MyApp
