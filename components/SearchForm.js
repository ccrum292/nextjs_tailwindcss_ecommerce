import { useEffect, useRef } from "react"

export default function SearchForm(props){
  const searchField = useRef(null)

  useEffect(()=>{
    searchField.current.focus()
  },[props.searchDivOpen])

  const onSubmitSetHistory = e => {
    e.preventDefault()
    props.setSearchHistory([props.search, ...props.searchHistory])
  }

  return(
    <form onSubmit={onSubmitSetHistory} className="min-w-full flex-grow rounded-full">
      <input onChange={e => props.setSearch(e.target.value)} className="min-w-full min-h-full border-4 border-gray-300 rounded-full py-2 px-4" ref={searchField} name="search" placeholder="Search" type="text"></input>
    </form>
  )
}