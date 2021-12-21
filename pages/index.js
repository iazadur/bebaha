import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bebaha</title>
        <meta name="description" content="THis is bebaha web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div className="bg-black font-extrabold text-3xl p-80 text-white">the Home main content</div>


    </>
  )
}
