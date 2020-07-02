import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import SearchForm from "./SearchForm"
import { useState } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function SearchDiv(props){
  const [search, setSearch] = useState("")
  const [searchHistory, setSearchHistory] = useState(["test11111111111111111111111111111111111", "test2"]);

  const deleteFromSearchHistory = (data) => {
    // console.log("hello")
    setSearchHistory(searchHistory.filter(val => val != data))
  }


  return (
    <div className="fixed top-0 bg-red-700 z-10 h-full w-full">
      <div className="flex justify-between border-b border-gray-300">
        <div className="cursor-pointer p-2 self-center transition duration-300 ease-in-out transform hover:scale-125" onClick={()=> {props.setSearchDivOpen(!props.searchDivOpen)}}>
          <FontAwesomeIcon style={{color:"#e2e8f0"}} size="2x" icon={faArrowLeft}/>
        </div>
        <div className="p-2 self-center flex-grow flex">
          <SearchForm searchHistory={searchHistory} setSearchHistory={setSearchHistory} search={search} setSearch={setSearch} searchDivOpen={props.searchDivOpen} />
        </div>
        <div onClick={() => setSearchHistory([search, ...searchHistory])} className="cursor-pointer p-2 self-center transition duration-300 ease-in-out transform hover:scale-125">
          <FontAwesomeIcon style={{color:"#e2e8f0"}} size="2x" icon={faSearch}/>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="pl-20 pt-2"><h4 className="text-white">Search History</h4></div>
        {searchHistory ? searchHistory.map(data => {
          return<div className="px-16 mt-2">
                  <div className="flex justify-between w-full border-4 border-gray-300 rounded-full py-2 px-4 transition duration-500 ease-in-out hover:bg-gray-800 transform hover:scale-110">
                  <h4 className="cursor-pointer overflow-x-hidden truncate text-white ">{data}</h4>
                  <FontAwesomeIcon onClick={e => {e.preventDefault; deleteFromSearchHistory(data);}} className="ml-2 cursor-pointer self-center transition duration-300 ease-in-out transform hover:scale-125" style={{color:"#e2e8f0"}} size="1x" icon={faTimes}/>
                  </div>
                </div>
        }): <div></div>}
      </div>
    </div>
  )
}

export default SearchDiv;