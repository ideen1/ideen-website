import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ReactGA from 'react-ga';

ReactGA.initialize('G-5GES0RQTCG');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
