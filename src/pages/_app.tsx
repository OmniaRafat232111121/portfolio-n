import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" themes={['light', 'dark']}>
          <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
      {/* // do this div style later (after putting the content) */}
      <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light  ">
        {/* //!sidebar */}
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light rounded-2xl lg:col-span-9 dark:bg-dark-500">
        {/* //!navbar */}
        <Navbar />
        {/* //!about */}
        <Component {...pageProps} />
      </div>
    </div>
  </ThemeProvider>
  )
}
