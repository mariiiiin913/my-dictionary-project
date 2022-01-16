import React from "react";

import "./Phonetics.css";

export default function Phonetics(props){
    console.log(props.phonetic)
    return (<div className="Phonetics">
        <a href={props.phonetic.audio} target="_brank">
            Listen  
            </a>
            <br />
            <span className="phonetic-text">
            {props.phonetic.text}
            </span>
        </div>);
}