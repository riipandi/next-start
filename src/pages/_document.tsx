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
          {/* Generated using: favicon-generator.org */}
          <link rel='apple-touch-icon' sizes='57x57' href='/favicon/apple-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/favicon/apple-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/favicon/apple-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/favicon/apple-icon-76x76.png' />
          <link rel='apple-touch-icon' sizes='114x114' href='/favicon/apple-icon-114x114.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='/favicon/apple-icon-120x120.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='/favicon/apple-icon-144x144.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/favicon/apple-icon-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-icon-180x180.png' />
          <link rel='icon' type='image/png' sizes='192x192' href='/favicon/android-icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='96x96' href='/favicon/favicon-96x96.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-TileImage' content='/favicon/ms-icon-144x144.png' />
          <meta name='theme-color' content='#ffffff' />
          {/* Load fonts from CDN */}
          {/* <link rel='stylesheet' href='https://gfont.e90.workers.dev/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' /> */}
          <link rel='stylesheet' href='https://fonts.cdnfonts.com/css/inter' />
          <link rel='stylesheet' href='https://fonts.cdnfonts.com/css/sriracha' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
