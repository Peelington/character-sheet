import React, { useContext, useState } from "react";
import { CharacterContext } from "./CharacterContext"
import axios from "axios";

export default function Class(props){
    // handleSubmit
    // console.log('in class comp props:', props)
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
            <h1>
                class: {props.class}
            </h1>
            <p className="hit-dice">Hit Dice: D{props.hitDie}</p>
            <ul className="saving-throws">Saving Throws: {saving_throws}</ul>
            <ul className="Proficiencies">Proficiencies: {proficiencies}</ul>

            <button className="classBtn" onClick={() => classClicked(props)}>Choose this Class</button>
        </div>
    )
}

