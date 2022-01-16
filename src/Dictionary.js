import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
const[keyword, setKeyword]=useState("");
const[results, setResults]=useState(null);

  function handleResponse(response){
    setResults(response.data[0]);
  }

  function search(event){
    event.preventDefault(); 
    
    ///documentation: https://dictionaryapi.dev/
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordUpdate(event){
    setKeyword(event.target.value);
  }

    return (
        <div className="Dictionary">
          <section>
          <div className="hint">
              Look up a word...
            </div>
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordUpdate}/>
            </form>
            </section>
            <Results results={results}/>
            </div>);
}