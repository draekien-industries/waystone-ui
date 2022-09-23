import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class PortfolioDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-AU">
        <Head>
          <meta property="og:site_name" content="wpei" />
          <meta property="og:url" content="https://www.wpei.me" />
          <meta property="og:image" content="https://i.imgur.com/L4VIf86.png" />
          <meta property="og:title" content=".NET Developer | William Pei" />
          <meta
            property="og:description"
            content="The portfolio website for William Pei where he showcases personal projects."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@wpei" />
          <meta name="twitter:creator" content="@draekien" />
          <meta name="twitter:title" content=".NET Developer | William Pei" />
          <meta
            name="twitter:description"
            content="The portfolio website for William Pei where he showcases personal projects."
          />
          <meta
            name="twitter:image"
            content="https://i.imgur.com/L4VIf86.png"
          />
          <meta
            name="twitter:image:alt"
            content="A preview of the landing page of the wpei website."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PortfolioDocument;
