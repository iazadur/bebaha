import Head from 'next/head'
import AddUsers from '../components/Home/AddUser/AddUsers'
import CallHim from '../components/Home/CallHim/CallHim'
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
      <AddUsers />
      <CallHim />


    </>
  )
}
