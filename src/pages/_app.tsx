import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'

// Import global store
import { store } from "../state/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <DefaultSeo {...SEO} /> */}
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
