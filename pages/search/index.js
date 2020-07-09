import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import SearchForm from "../../components/SearchForm"
import { useContext } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import SearchContext from "../../context"
import searchDummyData from "../../lib/js/searchDummyData"
import ProductDivSmHorz from "../../components/ProductDivSmHorz"
import Router from "next/router"

export default function Search() {
  const {search, setSearch, searchHistory, setSearchHistory} = useContext(SearchContext)
  console.log(searchHistory);
  const deleteFromSearchHistory = (data) => {
    // console.log("hello")
    setSearchHistory(searchHistory.filter(val => val.id != data.id))
  }

  const onSubmitSetHistoryNotProp = e => {
    e.preventDefault()
    let nextId;
    if (searchHistory.length != 0) {
      nextId = searchHistory[searchHistory.length - 1].id + 1;
    } else {
      nextId = 0
    }
    setSearchHistory([...searchHistory, { id: nextId, text: search }])
  }

  const displaySearchResults = (data) => {
    return data.map(val => {
      return(
        <div key={val.id} className="sm:mx-auto">
          <ProductDivSmHorz
          key={val.id}
          title={val.title}
          price={val.price} 
          img={{ src: val.img.src, alt: val.img.alt }} 
          rating={val.rating} 
          tooltip={val.rating} />
        </div>
      )
    })
  }

  return (
    <div className="sm:flex sm:justify-center sm:h-screen fixed top-0 sm:w-full z-10 bg-gray-800 bg-opacity-75">
      <div className="fixed top-0 bg-red-700 z-20 h-full w-full  sm:max-w-4xl sm:self-center sm:rounded-lg overflow-y-auto">
        <div className="flex justify-between border-b border-gray-300 mb-1">
          <div className="cursor-pointer p-2 self-center transition duration-300 ease-in-out transform hover:scale-125" onClick={() => Router.back()}>
            <FontAwesomeIcon style={{ color: "#e2e8f0" }} size="2x" icon={faArrowLeft} />
          </div>
          <div className="p-2 self-center flex-grow flex">
            <SearchForm />
          </div>
          <div onClick={onSubmitSetHistoryNotProp} className="cursor-pointer p-2 self-center transition duration-300 ease-in-out transform hover:scale-125">
            <FontAwesomeIcon style={{ color: "#e2e8f0" }} size="2x" icon={faSearch} />
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2">
          {displaySearchResults(searchDummyData)}
        </div>
        <div className="flex flex-col-reverse mb-4">
          {searchHistory ? searchHistory.map(data => {
            return <div onClick={e => {
              e.preventDefault(); 
              setSearch(data.text);
              setSearchHistory([...searchHistory, {id: searchHistory[searchHistory.length - 1].id + 1, text: data.text}]) 
              Router.push("/search")
            }} key={data.id} className="px-16 mt-2">
              <div className="cursor-pointer shadowClass flex justify-between w-full border-4 border-gray-300 rounded-full py-2 px-4 transition duration-500 ease-in-out transform hover:bg-gray-800">
                <h4 className="overflow-x-hidden truncate text-white jost ">{data.text}</h4>
                <FontAwesomeIcon onClick={e => { e.stopPropagation(); deleteFromSearchHistory(data); }} className="ml-2 cursor-pointer self-center transition duration-300 ease-in-out transform hover:scale-150" style={{ color: "#e2e8f0" }} size="1x" icon={faTimes} />
              </div>
            </div>
          }) : <div></div>}
          <div className="pl-20 pt-2"><h4 className="text-white">Search History</h4></div>
        </div>
      </div>
    </div>
  )
}