import '../styles/globals.css'
import '../lib/hexStyles.css'
import {TwitterProvider} from '../context/TwitterContext'

function MyApp({ Component, pageProps }) {
  return (
    <TwitterProvider>
      <Component
    </TwitterProvider>
  )
}

export default MyApp
