import React, { useContext, useState } from "react";
import { CharacterContext } from "./CharacterContext"


export default function Class(props){
    const { CharacterClass, setCharacterClass, classClicked } = useContext(CharacterContext)

    // console.log(props.proficiencies)

    const proficiencies = props.proficiencies.map((proficiency, index) => {
        if(!proficiency.name.includes('Saving Throw:')){
            return(
                <li className="charProficiencies" key={index}>{proficiency.name}</li>
            )
        }
    })
    

    const saving_throws = props.saving_throws.map((save, index) => {
        return(
            <li className="charSaves"key={index}>{save.name}</li>
        )
    })
    // console.log(saving_throws)

    return(
        <div className="classes">
            <div className="class-temp">
            <h1>
                <strong>Class:</strong> {props.class}
            </h1>
            <p className="hit-dice"><strong>Hit Dice:</strong> D{props.hitDie}</p>
            <h2><strong>Saving Throws:</strong></h2>
            <ul className="saving-throws"> {saving_throws}</ul>
            <h2><strong>Proficiencies:</strong></h2>
            <ul className="Proficiencies"> {proficiencies}</ul>

            <button className="classBtn" onClick={() => classClicked(props)}>Choose this Class</button>
            </div>
        </div>
    )
}

