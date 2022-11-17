import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Forum&family=Nabla&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="./favicon.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/favicon.png"></link>
        <meta name="theme-color" content="#1c1917" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
