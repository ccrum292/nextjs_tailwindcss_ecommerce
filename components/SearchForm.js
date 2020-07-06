import { useEffect, useRef, useContext } from "react"
import SearchContext from "../context"
import Router from "next/router"

export default function SearchForm(props){
  const searchField = useRef(null)
  const {search, setSearch, searchHistory, setSearchHistory} = useContext(SearchContext)

  useEffect(()=>{
    searchField.current.focus()
  },[props.searchDivOpen])

  const onSubmitSetHistory = e => {
    e.preventDefault()
    let nextId = 0;
    if(searchHistory.length != 0){
      nextId = searchHistory[searchHistory.length -1].id + 1;
    }
    setSearchHistory([...searchHistory, {id:nextId, text: search}])
    Router.push("/search")
  }

  return(
    <form onSubmit={onSubmitSetHistory} className="min-w-full flex-grow rounded-full">
      <input value={search} onChange={e => setSearch(e.target.value)} className="jost outline-none min-w-full min-h-full border-4 border-gray-300 rounded-full py-2 px-4" ref={searchField} name="search" placeholder="Search" type="text"></input>
    </form>
  )
}