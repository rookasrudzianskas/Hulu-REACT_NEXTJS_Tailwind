import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu app</title>
        <link rel="icon" href="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png" />
      </Head>


        <Header />
        <Nav />


    </div>
  )
}
