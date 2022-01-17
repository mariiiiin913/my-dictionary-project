import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props){
const[keyword, setKeyword]=useState(props.defaultKeyword);
const[results, setResults]=useState(null);
const[loaded,setLoaded]=useState(false);
const[photos,setPhotos]=useState(null);

  function handleDictionResponse(response){
    setResults(response.data[0]);
  }

  function handlePexcelsResponse(response){
   setPhotos(response.data.photos);
  }

  function search(){
    ///documentation: https://dictionaryapi.dev/
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

    let pexcelsApiKey="563492ad6f91700001000001ceedf5a058514a3ea46c654437750eca";
    let pexcelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers={Authorization: `Bearer ${pexcelsApiKey}`}
    axios.get(pexcelsApiUrl, {headers: headers}).then(handlePexcelsResponse);
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
            <Photos photos={photos} />
            </div>);
        }else{
          load();
          return "Loading..."
        }
    }