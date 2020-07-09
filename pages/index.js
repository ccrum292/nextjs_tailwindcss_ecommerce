import Nav from '../components/Nav'
import Head from 'next/head'
import HeaderPills from "../components/HeaderPills"
import ProductDivLgVert from "../components/ProductDivLgVert"
import ProductDivSmHorz from "../components/ProductDivSmHorz"
import SideNavMenu from "../components/SideNavMenu"
import ToTop from "../components/ToTop"

import { useState } from 'react'
import { motion } from "framer-motion"

export default function IndexPage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="bg-gray-900 pb-4">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Next.js and Tailwind eCommerce Store"
        />
        <title>Caleb's Commerce</title>
      </Head>
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <div className="lg:flex">
        {navOpen ? null:
        <div className="hidden lg:block">
          <SideNavMenu/>
        </div>}
        <div className="">
          <HeaderPills/>
          <h2 className="jost font-bold border-b-2 border-gray-800 m-2 text-2xl text-gray-300">New Products</h2>
          <div className="flex flex-wrap justify-around">
            <ProductDivLgVert title="Hello Worlddddddddddddddddddddddddddd" price={9999999999999.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello Worldddddddddddddd" price={9.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <div className="flex flex-col justify-around">
              <ProductDivSmHorz title="Hello Worlddddddddddddddddddddd" price={9999999.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99999.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            </div>
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <div className="flex flex-col justify-around">
              <ProductDivSmHorz title="Hello Worlddddddddddddddddddddd" price={9999999.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99999.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            </div>
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
          </div>

          <h2 className="jost font-bold border-b-2 border-gray-800 m-2 text-2xl text-gray-300">Popular Products</h2>
          <div className="flex flex-wrap justify-around">
            <ProductDivLgVert title="Hello Worlddddddddddddddddddddddddddd" price={9999999999999.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello Worldddddddddddddd" price={9.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <div className="flex flex-col justify-around">
              <ProductDivSmHorz title="Hello Worlddddddddddddddddddddd" price={9999999.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99999.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            </div>
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <div className="flex flex-col justify-around">
              <ProductDivSmHorz title="Hello Worlddddddddddddddddddddd" price={9999999.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99999.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            </div>
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
          </div>

          <h2 className="jost font-bold border-b-2 border-gray-800 m-2 text-2xl text-gray-300">Suggested For You</h2>
          <div className="flex flex-wrap justify-around">
            <ProductDivLgVert title="Hello Worlddddddddddddddddddddddddddd" price={9999999999999.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello Worldddddddddddddd" price={9.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <div className="flex flex-col justify-around">
              <ProductDivSmHorz title="Hello Worlddddddddddddddddddddd" price={9999999.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99999.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            </div>
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <div className="flex flex-col justify-around">
              <ProductDivSmHorz title="Hello Worlddddddddddddddddddddd" price={9999999.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99999.99} img={{ src: "/1543982.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
              <ProductDivSmHorz title="Hello World" price={99.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            </div>
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
            <ProductDivLgVert title="Hello World" price={9.99} img={{ src: "/coolCat.jpg", alt: "hello world" }} rating={3.7} tooltip={3.7} />
          </div>

        </div>
      </div>
      <ToTop/>
    </div>
  )
}
