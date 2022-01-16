import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props){
const[keyword, setKeyword]=useState(props.defaultKeyword);
const[results, setResults]=useState(null);
const[loaded,setLoaded]=useState(false);

  function handleResponse(response){
    setResults(response.data[0]);
  }

  function search(){
    ///documentation: https://dictionaryapi.dev/
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault(); 
    search();
  }

  function handleKeywordUpdate(event){
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded){
    return (
        <div className="Dictionary">
          <section>
          <div className="hint">
              Look up a word...
            </div>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordUpdate} defaultValue={props.defaultKeyword}/>
            </form>
            </section>
            <Results results={results}/>
            </div>);
        }else{
          load();
          return "Loading..."
        }
    }