import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Navigation from '@/components/Navigation';
import AboutCard from '@/components/AboutCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Ideen Banijamali</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-screen h-screen bg-primary'>

        <div className='grid h-1/6 w-full '>
          <Navigation />
        </div>
        <div className='h-5/6 w-full gap-4 content-start'>
          <AboutCard />
        </div>


      </div>
    </>
  )
}
