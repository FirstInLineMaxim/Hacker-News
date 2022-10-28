import "./App.css";
import { useEffect, useState } from "react";
import {onSearch} from "./FetchData"
import Main from './Components/Main';
import SearchBar from "./Components/Footer/SearchBar";

function App() {
  const [search, setSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

 useEffect(() => {
  onSearch().then(data => {
    setSearch(data)
    return data
  }).then(data => {
    searchResults(data)
  })
 }, [])


  return (
    <>
      {/* HEADER */}
      <div>Header</div>

      {/* MAIN */}
      <div>Main</div>
      <SearchBar search={search} setSearchResults={setSearchResults}/>
      <Main />
      {/* FOOTER */}
      <div>FOOTER</div>
    </>
  );
}

export default App;
