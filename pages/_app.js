import '../css/tailwind.css'
import '../css/extra.css'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import siteMetadata from '../utils/siteMetadata'
import DashboardProvider from '../lib/provider/context'
import ScrollTop from '../components/ScrollTop'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useState } from 'react'
import Loader from '../components/Loader'

function MyApp({ Component, pageProps }) {
  const [busy, setBusy] = useState(false)

  NProgress.configure({ showSpinner: false })

  Router.onRouteChangeStart = () => {
    // console.log('onRouteChangeStart triggered');
    NProgress.start()
    setBusy(true)
  }

  Router.onRouteChangeComplete = () => {
    // console.log('onRouteChangeComplete triggered');
    NProgress.done()
    setBusy(false)
  }

  Router.onRouteChangeError = () => {
    // console.log('onRouteChangeError triggered');
    NProgress.done()
    setBusy(false)
  }

  if (busy) return <Loader />

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Toaster />
      <ScrollTop />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <DashboardProvider>
        <Component {...pageProps} />
      </DashboardProvider>
    </ThemeProvider>
  )
}

export default MyApp
