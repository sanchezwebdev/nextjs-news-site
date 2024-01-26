import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/news-publishing-svgrepo-com.svg" type="image/png"/>       
        <title>Pasadena Tribune</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
