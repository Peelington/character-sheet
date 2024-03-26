import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "./CharacterContext";
import Class from "./Class";
import axios from "axios";

export default function ClassList(){

    const { characterClasses } = useContext(CharacterContext)

    // console.log(characterClasses)

    const [list, setList] = useState([])

    const classListElement = list.map((characterClass) =>{

        return (
            <Class 
            key={characterClass.index}
            class={characterClass.name}
            hitDie={characterClass.hit_die}
            proficiencies={characterClass.proficiencies}
            saving_throws={characterClass.saving_throws}
            />
        )
    })

    useEffect(() => {
        const classMap = Promise.all(characterClasses.map(async charClass => {
            try {
                const res = await axios.get(`https://www.dnd5eapi.co${charClass.url}`)
                return res.data
            } catch (err) {
                console.log(err)
            }
    
        }))
       classMap.then(res => setList(res))
    },[list])

//    console.log(list)


    return (
        <>
            <h1>classes</h1>
            {classListElement}
        </>
    )
}