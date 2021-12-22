import Head from 'next/head'
import Invitations from '../components/Home/Invitations/Invitations'
import Preference from '../components/Home/Preference/Preference'
import Users from '../components/Home/Users/Users'





export default function Home() {
  return (
    <>
      <Head>
        <title>Bebaha</title>
        <meta name="description" content="THis is bebaha web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Invitations />
      <Preference />
      <Users />


    </>
  )
}
