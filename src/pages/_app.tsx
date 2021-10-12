import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import Head from 'next/head' 
import {CalculatorProvider} from '../data/CalculatorContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tip Calculator </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="styles.css" />
      </Head>
      <CalculatorProvider>
        <Component {...pageProps} />
      </CalculatorProvider>
    </>
    )
}

export default MyApp
