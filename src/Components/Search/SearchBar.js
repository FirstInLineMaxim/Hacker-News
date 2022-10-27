import { useState } from "react";
import Button from "./Button";


const SearchBar = () => {
  const [input, setInput] = useState("");
  // useEffect(() => {
    
  // return () => {
      
  //   }
  // }, []);

  const handleChange = ({target}) => {
    setInput(target.value);
  }
  
  console.log();

  return (
  <>
  <h3>Enter your Search</h3>
    <input type="text" value={input}  name="search" id="search-bar"  onChange={handleChange}/>
    <Button />  
  </>)
};

export default SearchBar