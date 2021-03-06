import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Mateo Ledesma - Full Stack Developer" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mateoledesma.vercel.app/" />
        <meta property="og:title" content="Mateo Ledesma - Full Stack Developer" />
        <meta property="og:image" content="/banner.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mateoledesma.vercel.app/" />
        <meta property="twitter:title" content="Mateo Ledesma - Full Stack Developer" />
        <meta property="twitter:image" content="/banner.jpg"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
