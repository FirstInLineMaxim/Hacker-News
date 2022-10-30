import "./App.css";
import { useEffect, useState } from "react";
import {onSearch} from "./FetchData"
import Main from './Components/Main';
import SearchBar from "./Components/Footer/SearchBar";
import Header from "./Components/Header";

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
     <div className="container">
        <div className="col-2"></div>
        <div className="col-8">
      {/* HEADER */}
      <div>Header</div>
      <Header />
      {/* MAIN */}
      <div>Main</div>
      <SearchBar search={search} setSearchResults={setSearchResults}/>
      <Main />
      {/* FOOTER */}
      </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}

export default App;
