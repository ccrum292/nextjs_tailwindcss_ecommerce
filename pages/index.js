import Nav from '../components/nav'
import Head from 'next/head'

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
    </div>
  )
}
