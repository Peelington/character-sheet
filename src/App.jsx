import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { CharacterContextProvider } from "./assets/CharacterContext"
import Character from './assets/Character';
import ClassList from './assets/ClassList';
import RaceList from './assets/RaceList';
import './App.css'

function App() {


  return (
    <>
      <CharacterContextProvider>
        <nav className='nav-bar'>
          <Link to="/Character">Character Sheet</Link>
          <Link to="/ClassList">Classes</Link>
          <Link to="/RaceList">Races</Link>
        </nav>
        <Routes> {/*Step 6*/}
          <Route path ="/Character" element={<Character />} /> 
          <Route path ="/ClassList" element={<ClassList />} /> 
          <Route path ="/RaceList" element={<RaceList />} /> 
        </Routes>
      </CharacterContextProvider>
    </>
  )
}

export default App
