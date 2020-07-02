import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { motion } from "framer-motion";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false)
  
  function openCloseNav(){
    if(navOpen){
      setNavOpen(false)
    }else{
      setNavOpen(true)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between bg-gray-800">
        <div className="px-2 hover:shadow" onClick={openCloseNav} ><FontAwesomeIcon className="cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 text-red-500" style={{color:"#e2e8f0"}} size="2x" icon={faBars}/></div>
        {/* <div className="sm:hidden px-2">
          <h1 className="font-bold text-3xl align-top">CC</h1>
        </div> */}
        <div className="px-2">
          <Link href="/">
            <a className="self-center text-xl font-bold text-gray-300 sm:text-3xl">Caleb's Commerce</a>
          </Link>
        </div>
        <div className="p-2"><FontAwesomeIcon style={{color:"#e2e8f0"}} size="2x" icon={faSearch}/></div>
        <div className="p-2"><FontAwesomeIcon style={{color:"#e2e8f0"}} size="2x" icon={faShoppingCart}/></div>
      </div>
      {navOpen ? 
      <div className="flex flex-col bg-gray-300 transition ease-in-out">
        <div className="hover:shadow-lg hover:bg-gray-500 cursor-pointer"><h2 className="text-gray-800 text-xl font-bold px-2">Catagories</h2></div>
        <div className="hover:shadow-lg hover:bg-gray-500 cursor-pointer"><h2 className="text-gray-800 text-xl font-bold px-2">User</h2></div>
        <div className="hover:shadow-lg hover:bg-gray-500 cursor-pointer"><h2 className="text-gray-800 text-xl font-bold px-2">Item</h2></div>
        <div className="hover:shadow-lg hover:bg-gray-500 cursor-pointer"><h2 className="text-gray-800 text-xl font-bold px-2">Item</h2></div>
      </div>: <div></div>}
    </>


    // <nav>
    //   <ul className="flex justify-between items-center p-8">
    //     <li>
    //       <Link href="/">
    //         <a className="text-blue-500 no-underline">Home</a>
    //       </Link>
    //     </li>
    //     <ul className="flex justify-between items-center space-x-4">
    //       {links.map(({ href, label }) => (
    //         <li key={`${href}${label}`}>
    //           <a href={href} className="btn-blue no-underline">
    //             {label}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   </ul>
    // </nav>
  )
}
