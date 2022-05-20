import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <meta name='msapplication-TileImage' content='/favicon.svg' />
          <meta name='msapplication-TileColor' content='#41D1FF' />
          <meta name='theme-color' content='#41D1FF' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
