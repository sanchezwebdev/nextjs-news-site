import '../styles/globals.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoadingModal from '../components/LoadingModal';
import Head from 'next/head';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChangeStart = () => setIsLoading(true);
    const handleRouteChangeComplete = () => setIsLoading(false);
    const handleRouteChangeError = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    // Cleanup
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);
  return (
    <>
      <Head>
        <link rel="icon" href="/news-publishing-svgrepo-com.svg" type="image/png"/>       
        <title>Pasadena Tribune</title>
      </Head>
      {isLoading && <LoadingModal />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
