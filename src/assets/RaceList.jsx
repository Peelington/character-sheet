import React, { useContext, useState, useEffect } from "react";
import { CharacterContext } from "./CharacterContext";
import axios from "axios";
import Races from "./Races";


export default function RaceList(props){

    const { races, } = useContext(CharacterContext)

    // console.log(races)

    const [listOfRaces, setListOfRaces] = useState([])

    const raceListElement = listOfRaces.map((race) =>{
        // console.log(race.languages)
        return (
            <Races 
            // prop={race}
            key={race.index}
            race={race.name}
            size={race.size}
            abilityScores={race.ability_bonuses}
            // alignment={}
            languages={race.languages}
            />
        )
    })
    

    useEffect(() => {
        const raceMap = Promise.all(races.map(async race => {
            try {
                const res = await axios.get(`https://www.dnd5eapi.co${race.url}`)
                return res.data
            } catch (err) {
                console.log(err)
            }
    
        }))
       raceMap.then(res => setListOfRaces(res))
    },[listOfRaces])

//    console.log(listOfRaces)


    return (
        <>
            <h1>Races</h1>
            {raceListElement}
        </>
    )
}