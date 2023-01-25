import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <body className="dark:bg-purple-blue bg-seablue"> */}
      <body className="dark:bg-navy bg-seablue">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
