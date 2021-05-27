import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu app</title>
        <link rel="icon" href="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png" />
      </Head>


        <Header />
        <Nav />
        <Results />

    </div>
  );
}

// server side rendering, will give back props
export async function getServerSideProps(context) {
    // we get the movie genre
    const genre = context.query.genre;

}
