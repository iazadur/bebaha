import Head from 'next/head';
import Image from 'next/image';
import styles from '../src/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bebaha</title>
        <meta name="description" content="This is bebaha web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black font-extrabold text-3xl p-80 text-white">Main content</div>


    </>
  )
}
