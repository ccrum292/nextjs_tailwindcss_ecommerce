import Nav from '../components/Nav.js'
import Head from 'next/head'
import HeaderPills from "../components/HeaderPills"
import ProductDivLg from "../components/ProductDivLg"

export default function IndexPage() {
  return (
    <div className="bg-gray-300">
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
