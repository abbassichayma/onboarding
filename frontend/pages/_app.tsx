import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Lyout from '../components/Lyout'

export default function App({ Component, pageProps }: AppProps) {
  return (
<Lyout>                       
<Component {...pageProps} />
</Lyout> 
  

)}
