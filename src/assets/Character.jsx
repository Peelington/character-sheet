import React, { useState,useContext } from "react";
import { CharacterContext } from "./CharacterContext"

export default function Character(props){

    const { race, characterClass } = useContext(CharacterContext)
    
    // console.log(race.abilityScore)
    const abilityList = race.abilityScore
    console.log(abilityList)

    return(
        <div className="characterSheet">
            <h1 className="characterSheet-title">Character Sheet</h1>
            <form>
                <div className="playerInfo">
                <input className="player-info"type="text" placeholder="Player Name"></input>
                <input className="player-info"type="text" placeholder="Character Name"></input>
                </div>
                <div className="class-race">
                <p>Class: {characterClass.charClass}</p>
                <p>Race: {race.race}</p>
                <p>size: {race.size}</p>
                </div>
                <span className="hitDice">Hit Dice: {characterClass.hitDie}</span>
                <input className="stat-block" type="text" placeholder="(Health)"></input>
        
                <div className="stat-container">
                    <p>
                        Ability Scores: 
                        </p>
                    <ul>{abilityList?.map((stat, index) =>{
                        return(
                            <li classNamekey={index}>{stat.ability_score.name} bonus: +{stat.bonus}</li>
                            )
                        })
                    }</ul>
                    <input className="stat-block" type="text" placeholder="STR"></input>
                    <input className="stat-block" type="text" placeholder="DEX"></input>
                    <input className="stat-block" type="text" placeholder="CON"></input>
                    <input className="stat-block" type="text" placeholder="INT"></input>
                    <input className="stat-block" type="text" placeholder="WIS"></input>
                    <input className="stat-block" type="text" placeholder="CHA"></input>
                </div>
                <div className="prof-saves-lang">
                    <ul> Proficiendies: {characterClass.proficiencies?.map((proficiency, index) =>{
                        return(
                            <li key={index}>{proficiency}</li>
                            )
                        })}</ul>

                    <ul> Saving Throws: {characterClass.savingThrows?.map((save, index) =>{

                        return(
                            <li key={index}>{save}</li>
                            )
                        })}
                        </ul>

                    <ul>Languages: {race.languages?.map((language, index) =>{

                        return(
                            <li key={index}>{language}</li>
                            )
                        })}
                    </ul>
                </div>

            </form>
        </div>

        
    )
}