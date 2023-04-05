import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
     <Head>
     <link rel="preconnect" href="https://fonts.gstatic.com" />
     <link 
     href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Kaushan+Script&family=Nunito+Sans&display=swap" 
     rel="stylesheet"/>
     </Head>
     <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}