import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className='grid grid-cols-12 gap-6 lg:px-48 my-14'>
      <div className='lg:col-span-3 col-span-12 bg-white rounded-2xl p-4 text-center'>
          <Sidebar/>
      </div>
      <div className=' flex flex-col col-span-12 lg:col-span-9  bg-white rounded-2xl p-4 text-center overflow-x'>
        <Navbar/>
      <Component {...pageProps} />
      </div>
    </div>
    </>
  )
}
