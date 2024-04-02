import React, { useContext, useState } from "react";
import { CharacterContext } from "./CharacterContext"

export default function Races(props) {

    // console.log(`in race comp props:`, props)

    const { race, races, setRace, raceClicked } = useContext(CharacterContext)


    // console.log(props)
    // console.log(prop.abilityScores.ability_score)

    const abilityScore = props.abilityScores.map((stat, index) => {
        // console.log(stat)
        return (
            <li className="ability-stat" key={index}>{stat.ability_score.name}</li>
        )
    })

    const knownLanguages = props.languages.map((language, index) => {
        return (
            <li className="knownLanguage" key={index}>{language.name}</li>
        )
    })

    // console.log(props)

    return (
        <div className="races">
            <div className="race-temp">
                <h1><strong>Race:</strong> {props.race}</h1>
                <p className="size"><strong>Size:</strong> {props.size}</p>
                <ul className="ability-score"><strong>Ability Scores:</strong> {abilityScore}</ul>
                <ul className="languages"><strong>Languages:</strong> {knownLanguages}</ul>
                <button onClick={() => raceClicked(props)}>Choose this race</button>
            </div>
        </div>
    )
}