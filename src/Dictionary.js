import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
const[keyword, setKeyword]=useState("");

  function handleResponse(response){
    console.log(response.data[0]);
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
        <div className="dictionary">
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordUpdate}/>
            </form>
            </div>);
}