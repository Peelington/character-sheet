import React, { useContext, useState } from "react";
import { CharacterContext } from "./CharacterContext"

export default function Races(props){

    // console.log(`in race comp props:`, props)

    const { race, races, setRace, raceClicked } = useContext(CharacterContext)


    // console.log(props)
    // console.log(prop.abilityScores.ability_score)

    const abilityScore = props.abilityScores.map((stat, index) =>{
        // console.log(stat)
        return(
            <li className="ability-stat" key={index}>{stat.ability_score.name}</li>
        )
    })

    const knownLanguages = props.languages.map((language, index) =>{
        return(
            <li className="knownLanguage" key={index}>{language.name}</li>
        )
    })

    // console.log(props)
    
    return(
        <div className="races">
            <h1>Race: {props.race}</h1>
            <p className="size">Size: {props.size}</p>
            <ul className="ability-score">Ability Scores: {abilityScore}</ul>
            <ul className="languages">Languages: {knownLanguages}</ul>

            <button onClick={() => raceClicked(props)}>Choose this race</button>
        </div>
    )
}