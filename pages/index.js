import Nav from '../components/Nav'
import Head from 'next/head'
import HeaderPills from "../components/HeaderPills";


export default function IndexPage() {
  return (
    <div>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Next.js and Tailwind eCommerce Store"
        />
        <title>Caleb's Commerce</title>
      </Head>
      <Nav />
      <HeaderPills/>
    </div>
  )
}
