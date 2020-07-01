import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <>
      <div className="flex items-center justify-between bg-red-400">
        <div className="px-2"><FontAwesomeIcon size="2x" icon={faBars}/></div>
        {/* <div className="sm:hidden px-2">
          <h1 className="font-bold text-3xl align-top">CC</h1>
        </div> */}
        <div className="px-2">
          <h1 className="font-bold">Caleb's Commerce</h1>
        </div>
        <div className="px-2"><FontAwesomeIcon size="2x" icon={faSearch}/></div>
        <div className="px-2"><FontAwesomeIcon size="2x" icon={faShoppingCart}/></div>
      </div>
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
