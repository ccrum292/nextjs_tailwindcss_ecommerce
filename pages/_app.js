import '../styles/index.css'
import SearchContext from "../context"
import { useState, useMemo } from "react"

function MyApp({ Component, pageProps }) {
  const [search, setSearch] = useState("")
  const [searchHistory, setSearchHistory] = useState([{ id: 0, text: "test1" }, { id: 1, text: "test2" }]);
  const value = useMemo(() => ({searchHistory, setSearchHistory, search, setSearch}),[searchHistory, setSearchHistory, search, setSearch])

  return <SearchContext.Provider value={value}><Component {...pageProps} /></SearchContext.Provider>
}

export default MyApp
