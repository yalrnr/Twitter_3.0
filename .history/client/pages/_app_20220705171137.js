import '../styles/globals.css'
import '../lib/hexStyles.css'
import {TwitterProvider} from '../context'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
