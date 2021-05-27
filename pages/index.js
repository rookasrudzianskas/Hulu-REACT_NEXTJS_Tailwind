import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({results}) {

  return (
    <div>
      <Head>
        <title>Hulu app</title>
        <link rel="icon" href="https://download.logo.wine/logo/Hulu/Hulu-Logo.wine.png" />
      </Head>


        <Header />
        <Nav />
        <Results results={results} />

    </div>
  );
}

// server side rendering, will give back props
export async function getServerSideProps(context) {
    // we get the movie genre
    const genre = context.query.genre;
    // we are making get request in here
    // genre url, if there is no, sofetch url and returns the JSON object
    const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json());

    return {
        props: {
            results: request.results,
        }
    }
}
