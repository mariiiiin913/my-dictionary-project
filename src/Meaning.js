import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props){
    return(
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){
            return(
                <div key={index}>
                    <p>
                    <strong>Definition: </strong>
                    <span className="definition">{definition.definition}</span>
                    <br />
                    <em>
                    <strong>Example: </strong><span className="example">{definition.example}</span>
                    </em>
                    <br />
                    <Synonyms synonyms={definition.synonyms}/>
                    </p>
                </div>
            )
        })}
        </div>
    );
}