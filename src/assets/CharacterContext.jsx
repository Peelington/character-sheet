import React, {useState, useEffect} from "react";
import axios from "axios";


const CharacterContext = React.createContext()

function CharacterContextProvider(props){

    const [ characterClass, setCharacterClass] = useState([]);
    const [ characterClasses, setCharacterClasses] = useState([])
    const [race, setRace] = useState([]);
    const [races, setRaces] = useState([]);

    // console.log(race)

// Getting Class from API
    useEffect(()=>{
        axios.get("https://www.dnd5eapi.co/api/classes")
        .then(res => setCharacterClasses(res.data.results))
        .catch((err)=> {console.log("Error", err)})
    }, [])
    // console.log(characterClasses)

// Getting race from API
    useEffect(()=>{
        axios.get("https://www.dnd5eapi.co/api/races")
        .then(res => setRaces(res.data.results))
        .catch((err)=> {console.log("Error", err)})
    }, [])
    // console.log(races)

    function raceClicked (charRace){
        const abilities = charRace.abilityScores.map((stat) => stat)
        // console.log("race clicked", charRace)
        setRace({
            // race: props
            race: charRace.race,
            size: charRace.size,
            abilityScore: abilities,
            languages: charRace.languages.map(language => language.name)
    })
}
// console.log(race.abilityScore)

// console.log(race.abilityScore)
// console.log(race.languages)

    function classClicked (charClass){
        // console.log("Class clicked", charClass)
        // console.log(charClass.saving_throws)
        setCharacterClass({
    //         // race: props
            charClass: charClass.class,
            hitDie: charClass.hitDie,
            proficiencies: charClass.proficiencies.map(proficiency => proficiency.name),
            savingThrows: charClass.saving_throws.map(save => save.name)
    })
    // console.log(characterClass)
    }
    

    return(
        <CharacterContext.Provider value={{
            characterClass,
            setCharacterClasses,
            race,
            setRace,
            races,
            characterClasses,
            raceClicked,
            classClicked
        }}>
            {props.children}

        </CharacterContext.Provider>
    )
}

export {CharacterContext, CharacterContextProvider}