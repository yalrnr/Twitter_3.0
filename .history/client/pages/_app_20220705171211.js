import '../styles/globals.css'
import '../lib/hexStyles.css'
import {TwitterProvider} from '../context/TwitterContext'

function MyApp({ Component, pageProps }) {
  return (
    <TwitterProvider>
      
    </TwitterProvider>
  )
}

export default MyApp
