import { useState } from "react";



const SearchBar = ({search, setSearchResults}) => {
  const handleSubmit = (e) => e.preventDefault()

  const handleChange = ({ target }) => {
    if(!target.value) return setSearchResults(search)

    const results = search.filter(search => search.title.includes(target.value) || search.body.includes(target.value));

    setSearchResults(results)
  };

  
  // const handleEnterKey = (event) => {
  //   if(event.key === "Enter") {
  //     onSearch(setInput)
  //   }
  // };

 

  return (
    <form onSubmit={handleSubmit}>
      <h3>Search:</h3>
      <input
        type="text"
        
        name="search"
        id="search-bar"
        onChange={handleChange}
        // onKeyDown={handleEnterKey}
      />

      
      
    </form>
  );
};

export default SearchBar;
