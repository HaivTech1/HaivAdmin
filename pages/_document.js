import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en-US" className="scroll-smooth">
      <Head>
        <meta name="application-name" content="HaivTech" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HaivTech Admin" />
        <meta name="description" content="HaivTech Innovation" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#F9A01B" />
        <meta name="msapplication-tap-highlight" content="yes" />
        <meta name="theme-color" content="#9F0E7F" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#F9A01B" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sora:300,400,500" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/android-chrome-512x512.png"
          sizes="512x512"
        />
      </Head>
      <body className="bg-white text-black antialiased dark:bg-background-color dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
